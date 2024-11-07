
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import { HiGlobeAlt } from "react-icons/hi";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";

export default function SelfintroPage() {
  return (
    <DefaultLayout>
        <section className="flex noscroll flex-col items-center justify-center gap-4  md:py-4">
            <div className=" items-center inline-block max-w-4xl text-center ">
                <h1 className={title({ class: " lg:text-6xl antialiased md:text-6xl font-light text-zinc-400" })}>
                   Self Intro
                </h1>
                <br />
                <h2 className={subtitle({ class: " mt-2 antialiased bg-zinc-300/20 px-2 text-center" })}>
               A self introducing terminal that shares information upon hotkey click.
                </h2>

            </div>
            <div className='flex items-center justify-evenly'>
            <Image
                width={600}
                alt="selfintro"
                src="/assets/selfIntro.png"
                className='rounded-md'
            />
            </div>
            <div className='flex flex-row  justify-center'>
            <Button className='flex items-center justify-center bg-zinc-50 border border-black/25 mx-2 rounded-md text-left '>
              <Link
                  href="https://self-intro-seven.vercel.app"
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
                  href="https://github.com/j-schneble/self-intro"
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
