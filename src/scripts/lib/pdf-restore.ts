// Ghostscript rewrites page content very well but drops the interactive layer
// (links, bookmarks, form fields, comments) and bakes /Rotate into the content.
// This puts the original interactive layer back on the compressed pages:
// annotations, AcroForm, outline, named destinations and page labels are
// copied from the source, with page references remapped to the new pages, and
// each page's original boxes and rotation are restored (content transformed
// back so it looks exactly the same).
import { PDFDocument, PDFName, PDFNumber, PDFObjectCopier, type PDFPage } from 'pdf-lib';

const CATALOG_KEYS = ['AcroForm', 'Outlines', 'Names', 'Dests', 'PageLabels', 'PageMode', 'OpenAction', 'ViewerPreferences'];
const BOXES = ['MediaBox', 'CropBox', 'BleedBox', 'TrimBox', 'ArtBox'];

/**
 * Load the source and tell whether it has anything Ghostscript would lose.
 * `doc` is null when there is nothing to restore or the file can't be read by
 * pdf-lib; `encrypted` tells the caller to decrypt first.
 */
export async function loadForRestore(bytes: ArrayBuffer | Uint8Array): Promise<{ doc: PDFDocument | null; encrypted: boolean }> {
  try {
    const src = await PDFDocument.load(bytes, { ignoreEncryption: true, updateMetadata: false, throwOnInvalidObject: false });
    if (src.isEncrypted) return { doc: null, encrypted: true };
    const hasCatalogStuff = CATALOG_KEYS.slice(0, 5).some((k) => src.catalog.has(PDFName.of(k)));
    const hasAnnots = src.getPages().some((p) => p.node.has(PDFName.of('Annots')));
    return { doc: hasCatalogStuff || hasAnnots ? src : null, encrypted: false };
  } catch {
    return { doc: null, encrypted: false };
  }
}

const rot = (p: PDFPage) => (((p.getRotation().angle ?? 0) % 360) + 360) % 360;
const near = (a: number, b: number) => Math.abs(a - b) < 1.5;

/** Matrix mapping Ghostscript page coordinates back to the source page's user space, or null if the pages don't match. */
function backMatrix(src: PDFPage, dst: PDFPage): number[] | null {
  const r = rot(src);
  const rg = rot(dst);
  const g = dst.getMediaBox();
  const candidates = [src.getMediaBox(), src.getCropBox()];
  if (rg === r) {
    const m = src.getMediaBox();
    if (near(m.x, g.x) && near(m.y, g.y) && near(m.width, g.width) && near(m.height, g.height)) return [1, 0, 0, 1, 0, 0];
    if (r !== 0) return null;
  } else if (rg !== 0) {
    return null;
  }
  for (const b of candidates) {
    const [dw, dh] = r % 180 ? [b.height, b.width] : [b.width, b.height];
    if (!near(dw, g.width) || !near(dh, g.height)) continue;
    const { x: x0, y: y0, width: w, height: h } = b;
    const { x: gx0, y: gy0 } = g;
    switch (r) {
      case 90: return [0, 1, -1, 0, x0 + w + gy0, y0 - gx0];
      case 180: return [-1, 0, 0, -1, x0 + w + gx0, y0 + h + gy0];
      case 270: return [0, -1, 1, 0, x0 - gy0, y0 + h + gx0];
      default: return [1, 0, 0, 1, x0 - gx0, y0 - gy0];
    }
  }
  return null;
}

/** Returns the restored PDF, or null when the page geometry doesn't line up (caller falls back). */
export async function restoreStructure(src: PDFDocument, gsBytes: Uint8Array): Promise<PDFDocument | null> {
  const dst = await PDFDocument.load(gsBytes, { updateMetadata: false });
  const sp = src.getPages();
  const dp = dst.getPages();
  if (sp.length !== dp.length) return null;
  const matrices = sp.map((p, i) => backMatrix(p, dp[i]));
  if (matrices.some((m) => !m)) return null;

  const copier = PDFObjectCopier.for(src.context, dst.context);
  // Page references inside annotations, fields and bookmarks must point to the new pages.
  const seen = (copier as unknown as { traversedObjects: Map<unknown, unknown> }).traversedObjects;
  sp.forEach((p, i) => seen.set(p.ref, dp[i].ref));

  sp.forEach((s, i) => {
    const d = dp[i];
    const m = matrices[i]!;
    if (m.join() !== '1,0,0,1,0,0') {
      const ctx = dst.context;
      d.node.normalize();
      const start = ctx.register(ctx.stream(`q ${m.map((v) => +v.toFixed(4)).join(' ')} cm\n`));
      const end = ctx.register(ctx.stream('\nQ'));
      d.node.wrapContentStreams(start, end);
    }
    for (const key of BOXES) {
      const name = PDFName.of(key);
      const v = key === 'MediaBox' || key === 'CropBox' ? s.node.getInheritableAttribute(name) : s.node.get(name);
      if (v) d.node.set(name, copier.copy(v));
      else d.node.delete(name);
    }
    if (rot(s)) d.node.set(PDFName.of('Rotate'), PDFNumber.of(rot(s)));
    else d.node.delete(PDFName.of('Rotate'));
    const annots = s.node.get(PDFName.of('Annots'));
    if (annots) d.node.set(PDFName.of('Annots'), copier.copy(annots));
    else d.node.delete(PDFName.of('Annots'));
  });

  for (const key of CATALOG_KEYS) {
    const v = src.catalog.get(PDFName.of(key));
    if (v) dst.catalog.set(PDFName.of(key), copier.copy(v));
  }
  return dst;
}
