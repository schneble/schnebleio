export class GoSeekGuardError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DownloadError";
  }
}

export const goSeekGuardFile = async (path: string): Promise<void> => {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new GoSeekGuardError(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const filename = path.split("/").pop() || "download.zip";

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    if (error instanceof GoSeekGuardError) {
      throw error;
    }
    throw new GoSeekGuardError("Failed to download file");
  }
};
