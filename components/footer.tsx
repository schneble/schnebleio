"use client";

import {usePathname} from "next/navigation";

import {getCurrentYear} from "../components/utils/time";

export const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("/examples")) {
    return null;
  }

  return (
    <footer className="container mx-auto max-w-7xl mt-2 px-12">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm text-default-900">
          © {getCurrentYear()} Schneble.io
        </p>
      </div>
    </footer>
  );
};
