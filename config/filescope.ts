import { FileScopeFile } from "../types/download";

export const FILESCOPE_FILES: readonly FileScopeFile[] = [
  {
    id: "FileScopeWIN",
    path: "/assets/downloads/filescopeWIN.zip",
    label: "Windows 10,11",
  },
  {
    id: "FileScope",
    path: "/assets/downloads/filescope.zip",
    label: " macOS 10.15+",
  },
] as const;
