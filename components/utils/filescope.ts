export class FileScopeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DownloadError";
  }
}

export const FileScopeFile = async (path: string): Promise<void> => {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new FileScopeError(`HTTP error! status: ${response.status}`);
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
    if (error instanceof FileScopeError) {
      throw error;
    }
    throw new FileScopeError("Failed to download file");
  }
};
