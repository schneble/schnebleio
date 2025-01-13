export interface GoSeekGuard {
  goSeekGuardWIN: boolean;
  goSeekGuard: boolean;
}

export type GoSeekGuardId = keyof GoSeekGuard;

export interface GoSeekGuardFile {
  id: GoSeekGuardId;
  path: string;
  label: string;
}

export interface FileScope {
  FileScopeWIN: boolean;
  FileScope: boolean;
}

export type FileScopeId = keyof FileScope;

export interface FileScopeFile {
  id: FileScopeId;
  path: string;
  label: string;
}
