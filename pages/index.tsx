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
          Utilizing Typescript frequently, aiming for a clean interface, and on a mission to
          build products developers love.
        </h2>

        <div
        className="flex flex-col border-b border-zinc-400/20 pb-6  mt-6 text-left cursor-default mob-width justify-between "
        >

                {/* <MailIcon
                className='stroke-1 brightness-25 mt-4 pl-1 text-zinc-600'
                /> */}

        <Connect  />
        </div>
        <div className="block w-full  text-left">
            <div className='flex flex-col mb-4 mt-6  items-center justify-evenly    '>


            <h2 className={subtitle({ class: "  flex text-lg flex-row   font-medium antialiased " })} >
           Recent
<button className=' mx-3 '>
                <Link
                className='  '
                href="https://github.com/schneble"
                >
                <GithubIcon className=' antialiased text-default-900 rounded-lg    ' size={24}
                />
                </Link>
                </button>
                </h2>




            </div>
            <div className='flex w-full border-b border-zinc-400/20 pb-10'>
                <Recents />
            </div>
        </div>


        </div>
    </section>
</DefaultLayout>

  );
}
