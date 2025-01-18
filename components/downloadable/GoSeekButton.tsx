import { Download } from "lucide-react";

import { GoSeekGuardFile } from "../../types/download";

interface GoSeekGuardButtonProps {
  file: GoSeekGuardFile;
  isLoading: boolean;
  onDownload: () => Promise<void>;
}

export const GoSeekGuardButton: React.FC<GoSeekGuardButtonProps> = ({
  file,
  isLoading,
  onDownload,
}) => (
  <button
    aria-busy={isLoading}
    className={`
       gap-1 flex justify-between py-2 px-2 pr-2 items-center
      tracking-tighter ring-2 ring-ac-800 bg-ac-600 hover:bg-ac-500 hover:ring-ac-700 noselect text-surface50  antialiased font-medium
      rounded-lg transition-colors
      disabled:opacity-50
    `}
    disabled={isLoading}
    onClick={onDownload}
  >
    <Download
      className={
        isLoading
          ? "animate-bounce"
          : "  flex ml-1 items-center text-center text-surface50"
      }
      size={14}
    />
    {isLoading ? "Downloading..." : file.label}
  </button>
);
