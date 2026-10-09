// Passes files dropped on the home page to the tool page the user picks,
// through IndexedDB (files never leave the browser).
const DB = 'tc-handoff';
const STORE = 'files';
const MAX_AGE = 5 * 60_000;

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveHandoff(files: File[]): Promise<void> {
  const db = await open();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put({ files, at: Date.now() }, 'pending');
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

export async function takeHandoff(): Promise<File[]> {
  if (!('indexedDB' in window)) return [];
  const db = await open();
  const value = await new Promise<{ files: File[]; at: number } | undefined>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    const store = tx.objectStore(STORE);
    const req = store.get('pending');
    req.onsuccess = () => { store.delete('pending'); resolve(req.result); };
    req.onerror = () => reject(req.error);
  });
  db.close();
  if (!value || Date.now() - value.at > MAX_AGE) return [];
  return value.files;
}
