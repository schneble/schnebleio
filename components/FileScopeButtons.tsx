import { useState } from "react";
import { Button } from "@nextui-org/react";

import { FILESCOPE_FILES } from "../config/filescope";
import { FileScope } from "../types/download";
import { FileScopeFile } from "../components/utils/filescope";

import { GithubIcon } from "./icons";
import { FileScopeButton } from "./FileScopeButton";

export const FileScopeButtons: React.FC = () => {
  const [isLoading, setIsLoading] = useState<FileScope>({
    FileScopeWIN: false,
    FileScope: false,
  });

  const handleDownload = async (
    file: (typeof FILESCOPE_FILES)[number],
  ): Promise<void> => {
    try {
      setIsLoading((prev) => ({ ...prev, [file.id]: true }));
      await FileScopeFile(file.path);
    } catch (error) {
      // Maybe add toast notification here
    } finally {
      setIsLoading((prev) => ({ ...prev, [file.id]: false }));
    }
  };

  return (
    <div className=" flex-col  rounded-lg  w-full flex items-center text-center">
      <div className="flex gap-4">
        {FILESCOPE_FILES.map((file) => (
          <FileScopeButton
            key={file.id}
            file={file}
            isLoading={isLoading[file.id]}
            onDownload={() => handleDownload(file)}
          />
        ))}
      </div>
      <Button
        className=" bg-inherit w-full mt-3 rounded-none  antialased "
        href={"https://github.com/schneble/go-seek.git"}
      >
        <p className="text-x-100 flex gap-2 text-sm  tracking-tighter  ">
          Free and open source
          <GithubIcon className="text-x-50" size={20} />
        </p>
      </Button>
    </div>
  );
};
