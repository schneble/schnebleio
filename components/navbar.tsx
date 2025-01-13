import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="bg-transparent sticky"
      maxWidth="lg"
      position="sticky"
    >
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
        <NextLink
          className="font-light shadow-xai-shadow antialiased text-sm justify-evenly "
          href="/"
        >
          <span className="text-white text-xl pr-1 ">∷</span>
          <span className="font-light text-x400 ">schneble</span>
        </NextLink>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex" />
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex" />
      </NavbarContent>
    </NextUINavbar>
  );
};
