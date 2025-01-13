import { GoSeekGuardFile } from "../types/download";

export const GOSEEKGUARD_FILES: readonly GoSeekGuardFile[] = [
  {
    id: "goSeekGuardWIN",
    path: "/assets/downloads/goseekguardWIN.zip",
    label: "Windows 10,11",
  },
  {
    id: "goSeekGuard",
    path: "/assets/downloads/goseekguard.zip",
    label: " macOS 10.15+",
  },
] as const;
