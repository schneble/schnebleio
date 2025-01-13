import { useState } from "react";
import { Button, Link } from "@nextui-org/react";

import { GOSEEKGUARD_FILES } from "../config/goseekguard";
import { GoSeekGuard } from "../types/download";
import { goSeekGuardFile } from "../components/utils/goseek";

import { GithubIcon } from "./icons";
import { GoSeekGuardButton } from "./GoSeekButton";

export const GoSeekGuardButtons: React.FC = () => {
  const [isLoading, setIsLoading] = useState<GoSeekGuard>({
    goSeekGuardWIN: false,
    goSeekGuard: false,
  });

  const handleDownload = async (
    file: (typeof GOSEEKGUARD_FILES)[number],
  ): Promise<void> => {
    try {
      setIsLoading((prev) => ({ ...prev, [file.id]: true }));
      await goSeekGuardFile(file.path);
    } catch (error) {
      // Maybe add toast notification here
    } finally {
      setIsLoading((prev) => ({ ...prev, [file.id]: false }));
    }
  };

  return (
    <div className=" flex-col  rounded-lg  w-full flex items-center text-center">
      <div className="flex gap-4">
        {GOSEEKGUARD_FILES.map((goSeekGuard) => (
          <GoSeekGuardButton
            key={goSeekGuard.id}
            file={goSeekGuard}
            isLoading={isLoading[goSeekGuard.id]}
            onDownload={() => handleDownload(goSeekGuard)}
          />
        ))}
      </div>

      <div>
        <Button className=" bg-inherit w-full mt-3 rounded-none antialased ">
          <Link
            className="text-x-100 flex gap-2 text-sm  tracking-tighter  "
            href={"https://github.com/schneble/go-seek.git"}
          >
            Free and open source
            <GithubIcon className="text-x-50" size={20} />
          </Link>
        </Button>
      </div>
    </div>
  );
};
