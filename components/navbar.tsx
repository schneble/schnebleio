import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";

export const Navbar = () => {

  return (
    <NextUINavbar className='bg-transparent' maxWidth="lg" position="sticky">
      <NavbarContent className=" basis-1/5 sm:basis-full" justify="start">
          <NextLink className="font-light flex text-left text-4xl text-zinc-800 text-inherit justify-evenly   " href="/">
                  ⌘
          </NextLink>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden md:flex">
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
