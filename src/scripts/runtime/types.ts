export type OptionValues = Record<string, string | number | boolean>;

export interface EngineInput {
  /** Files to process: one file in 'each' mode, all files in 'all' mode. */
  files: File[];
  /** User-selected options (from the tool's option panel). */
  options: OptionValues;
  /** Fixed tool parameters from the registry (e.g. target format). */
  params: OptionValues;
  /** Report progress between 0 and 1, with an optional status label. */
  progress: (ratio: number, label?: string) => void;
  signal: AbortSignal;
}

export interface EngineOutput {
  name: string;
  blob: Blob;
}

export type Engine = (input: EngineInput) => Promise<EngineOutput[]>;

export type UserErrorCode = 'password' | 'invalid' | 'empty' | 'unsupported' | 'options' | 'memory';

/** An error whose message is safe and useful to show to the user. */
export class UserError extends Error {
  code: UserErrorCode;
  constructor(code: UserErrorCode, message: string) {
    super(message);
    this.code = code;
    this.name = 'UserError';
  }
}

export function baseName(name: string): string {
  const i = name.lastIndexOf('.');
  return i > 0 ? name.slice(0, i) : name;
}

export function withExt(name: string, ext: string): string {
  return `${baseName(name)}.${ext.replace(/^\./, '')}`;
}

export function extOf(name: string): string {
  const i = name.lastIndexOf('.');
  return i > 0 ? name.slice(i + 1).toLowerCase() : '';
}

export function throwIfAborted(signal: AbortSignal): void {
  if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
}

/** Parse "1-3, 5, 8-" into zero-based page indices (deduped, in order). */
export function parseRanges(input: string, pageCount: number): number[][] {
  const groups: number[][] = [];
  for (const part of input.split(/[,;]+/).map((s) => s.trim()).filter(Boolean)) {
    const m = part.match(/^(\d*)\s*[-–]\s*(\d*)$/);
    let from: number, to: number;
    if (m) {
      from = m[1] ? parseInt(m[1], 10) : 1;
      to = m[2] ? parseInt(m[2], 10) : pageCount;
    } else if (/^\d+$/.test(part)) {
      from = to = parseInt(part, 10);
    } else {
      throw new UserError('options', `“${part}”`);
    }
    if (from < 1 || to < from || from > pageCount) throw new UserError('options', `“${part}”`);
    to = Math.min(to, pageCount);
    const g: number[] = [];
    for (let i = from; i <= to; i++) g.push(i - 1);
    groups.push(g);
  }
  return groups;
}
