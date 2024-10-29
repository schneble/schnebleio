
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import { BiLogoVisualStudio } from "react-icons/bi";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";

export default function BlackroulettePage() {
  return (
    <DefaultLayout>
        <section className="flex noscroll flex-col items-center justify-center gap-4  md:py-4">
            <div className=" items-center inline-block max-w-4xl text-center ">
                <h1 className={title({ class: " lg:text-6xl antialiased md:text-6xl font-light text-zinc-400" })}>
                    Black<span className='text-zinc-800 antialiased font-bold'>
                    Roulette</span>
                </h1>
                <br />
                <h2 className={subtitle({ class: " mt-2 antialiased bg-zinc-300/20 px-2 text-center" })}>
                A minimal, dark extension for VS code.
                </h2>

            </div>
            <div className='flex items-center justify-evenly'>
            <Image
                width={600}
                alt="blackroulette"
                src="/assets/blackblur.png"
                className='rounded-md'
            />
            </div>
            <div className='flex flex-row  justify-center'>
            <Button className='flex items-center justify-center bg-zinc-50 border border-black/25 mx-2 rounded-md text-left '>
              <Link
                  href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
                  className="text-center text-white "
              >
            <div className='flex items-center justify-center max-w-full p-2 text-center '>
              <h1 className='px-2 text-lg text-zinc-900 border-l rounded-sm border-zinc-800'>
                <BiLogoVisualStudio size={28} />
                </h1>
            </div>
            </Link>
            </Button>
            <Button className='flex items-center mx-2 justify-center rounded-md bg-zinc-950 border border-white/50 text-left '>
              <Link
                  href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
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
          <div className=" px-6 shadow-lg antialiased items-center text-left justify-evenly   flex flex-col ">
            <h1 className={subtitle({
                class: "  py-1 pb-2 border-zinc-500/20 border-b  font-medium rounded-sm   px-2 flex flex-col" })}
            >
            Recent updates
            </h1>
            <p className={subtitle({
                class:" antialiased backdrop-blur-sm  pb-4 opacity-80 font-light text-base px-2 flex flex-col "})}
            >
            Redesigned Command Center based on MacOS Spotlight and style changes to the overall editor.
            </p>
            <div className='flex flex-col '>
                <Image
                    width={600}
                    alt="blackroulette"
                    src="/assets/brupdate.png"
                    className='rounded border-2 border-amber-500'
                />
                <p className={subtitle({
                    class: "antialiased backdrop-blur-sm mt-4  pb-4 opacity-80 font-light text-base px-2 flex flex-col"})}
                    >The additional folder in the source repository is necessary since contents cannot be added directly to the JSON file.
                </p>
                <p className={subtitle({
                    class:"antialiased backdrop-blur-sm mt-2  pb-4 opacity-80 font-light text-base px-2 flex flex-col"})}
                    > Add your folder path to the blackroulette JSON file, as shown in the image above.
                    This folder includes two files: a JavaScript file that applies a backdrop blur to the Command Palette,
                    and a CSS file for style adjustments made via Visual Studio Developer Tools, also shown in the image.
                </p>
                </div>
          </div>
      </section>
    </DefaultLayout>
  );
}
