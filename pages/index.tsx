import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import  Connect from "@/components/Connect";
import { Link } from "@nextui-org/link";
import { MailIcon } from '../components/MailIcon'
import Recents from '../pages/recents'

import { GithubIcon } from "@/components/icons";
const iconClasses = "text-md text-default-500 pointer-events-none  flex-shrink-0";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-2  ">
      <div className="inline-block max-w-2xl text-center ">
        <h1 className={title({ class: " flex text-3xl mb-4 text-left" })}>Hey I&apos;m Jack.</h1>
        {/* <br /> */}
        <h2 className={subtitle({ class: " text-left" })}>
          I build responsive web applications that are efficient, fast, and
          accessible to all.
        </h2>
        <h2 className={subtitle({ class: " text-left" })}>
          Utilizing Typescript frequently to boost productivity, experimenting
          with Swift, aiming to keep a clean interface, and on a mission to
          build products developers love.
        </h2>
        <div
            className="flex flex-col  text-left cursor-default mob-width justify-between ">
        </div>
        <div className="block w-full text-left">
            <div className='flex mb-6 mt-8 pb-2 border-b-2 border-zinc-400/20 '>


            <p className='text-lg pr-4 flex justify-evenly font-normal antialiased text-zinc-600'>
              Recently
            </p>

            <button className='flex justify-evenly'>
                <Link
                className='px-1 pb-1 '
                href="https://github.com/j-schneble"
                >
                <GithubIcon className=' antialiased text-zinc-500 rounded-lg  ' size={25}
                />
                </Link>
            </button>

            </div>
            <div className='flex w-full '>
                <Recents />
            </div>
        </div>
        <div
        className="flex flex-col  mt-2 text-left cursor-default mob-width justify-between "
        >
            <div
            className='flex border-t border-t-zinc-500/10 mt-3  items-center gap-2 pt-3 pb-4  justify-evenly'
            >
                <MailIcon
                className='stroke-1 brightness-25 text-zinc-600'
                />
            <div className="block w-full pb- text-left">
                <p className='text-base font-normal text-zinc-600'>
                    Lets connect -
                    <span className='italic font-light text-zinc-600'
                    >
                    send me a message
                    </span>
                </p>
            </div>
        </div>
        <Connect  />
        </div>
        </div>
    </section>
</DefaultLayout>

  );
}
