
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import { HiGlobeAlt } from "react-icons/hi";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";

export default function Kinetiq() {
  return (
    <DefaultLayout>
        <section className="flex noscroll flex-col items-center justify-center gap-4  md:py-4">
            <div className=" items-center inline-block max-w-4xl text-center ">
                <h1 className={title({ class: " lg:text-6xl antialiased md:text-6xl font-light text-zinc-400" })}>
                   Kinetiq
                </h1>
                <br />
                <h2 className={subtitle({ class: " mt-4 mb-2 antialiased bg-zinc-300/20 px-2 text-center" })}>
                A gym application created with Typescript, React, Vite, and Tailwind. Created with the purpose of refamiliarizing myself with Vite and build time curiosity.
                </h2>
            </div>
            <div className='flex items-center justify-evenly'>
            <Image
                width={600}
                alt="kinetiq"
                src="/assets/kinetiq.png"
                className='rounded-md'
            />
            </div>
            <div className='flex flex-row  justify-center'>
            <Button className='flex items-center justify-center bg-zinc-50 border border-black/25 mx-2 rounded-md text-left '>
              <Link
                  href="https://bd223d15.kinetiq-vite.pages.dev"
                  className="text-center text-white "
              >
            <div className='flex items-center justify-center max-w-full p-2 text-center '>
              <h1 className='px-2 text-lg text-zinc-900 border-l rounded-sm border-zinc-800'>
                <HiGlobeAlt size={28} />
                </h1>
            </div>
            </Link>
            </Button>
            <Button className='flex items-center mx-2 justify-center rounded-md bg-zinc-950 border border-white/50 text-left '>
              <Link
                  href="https://github.com/j-schneble/kinetiq-vite"
                  className="text-center text-white  "
              >
            <div className='flex items-center justify-center max-w-full p-2 text-center '>
              <h1 className='px-2 text-lg text-white border-l border-white/20'>
                <GithubIcon size={28} />
            </h1>
            </div>
            </Link>
          </Button>
          </div>
      </section>
    </DefaultLayout>
  );
}
