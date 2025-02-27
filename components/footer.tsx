"use client";

import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { getCurrentYear } from "../components/utils/time";

import { GithubIcon } from "@/components/icons";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("/examples")) {
    return null;
  }

  return (
    <footer className="container  mx-auto max-w-7xl py-2 ">
      <div className="flex  justify-center items-center gap-1">
        <p className="text-xs px-4 text-white/35">
          © {getCurrentYear()} Jack Schneble
        </p>
        <div className="flex bg-[##050505] items-center gap-3">
          <Button
            as={Link}
            className="bg-inherit text-xs text-white/35"
            href="https://www.linkedin.com/in/johnaschneble"
            variant="flat"
          >
            <FaLinkedin size={12} />
            Linkedin
          </Button>
          <Button
            as={Link}
            className="bg-inherit text-xs text-white/35"
            href="https://github.com/schneble"
            variant="flat"
          >
            <GithubIcon size={12} />
            Github
          </Button>
        </div>
      </div>
    </footer>
  );
};
