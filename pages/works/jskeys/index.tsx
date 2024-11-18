
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";

export default function Jskeys() {
  return (
    <DefaultLayout>
        <section className="flex noscroll flex-col items-center justify-center gap-4  md:py-4">
            <div className=" items-center inline-block max-w-4xl text-center ">
                <h1 className={title({ class: " lg:text-6xl antialiased md:text-6xl font-light text-zinc-400" })}>
                   jsKeys <span className={subtitle({ class: "  antialiased text-base " })}> My Karabiner-Elements keyboard layout </span>
                </h1>
            </div>
            <div className='flex items-center justify-evenly'>
            <Image
                width={600}
                alt="jskeys"
                src="/assets/jskeyvisual.png"
                className='rounded border-2 border-zinc-800'
            />
            </div>
            <div className='flex px-6 shadow-lg bg-zinc-200/20 antialiased items-center text-left justify-evenly flex-col '>
                <div className=" flex flex-col justify-evenly">
                    <div className='flex justify-evenly'>
                        <h1 className={subtitle({
                            class: "py-1  border-zinc-500/20 border-b text-base  font-medium rounded-sm   px-2 flex items-center gap-6 " })}>
                                <Button className='bg-zinc-100 border mb-1 flex text-center items-center rounded'>
                                    <Link
                                    href="https://github.com/schneble/jsKeys.git">
                                    <GithubIcon
                                        size={24}
                                        className='text-zinc-700' />
                                    </Link>
                                </Button>
                                2 JSON complex modifications
                        </h1>
                    </div>
                    <p className={subtitle({
                        class:" antialiased backdrop-blur-sm text-base px-2 flex flex-col "})}>
                        Arrow Keys Modification
                        <span className='font-light'>
                            -- When holding down caps-lock, letter keys j, k, l, and i become arrow keys j←, k↓, l→, and i↑.
                        </span>
                    </p>
                    <p className={subtitle({
                        class: "antialiased backdrop-blur-sm pb-4 text-base px-2 flex flex-col"})}>
                            Open-Application modification
                            <span className='font-light'>
                                -- Combination of left_command + 3, the application of choice opens.
                            </span>
                    </p>
                </div>
            </div>
      </section>
    </DefaultLayout>
  );
}
