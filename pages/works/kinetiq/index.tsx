
import DefaultLayout from "@/layouts/default";
import { Link } from "@nextui-org/link";
import {Image} from "@nextui-org/react";
import { Button  } from "@nextui-org/button";
import { title, subtitle } from "@/components/primitives";
import { FaGithub } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

export default function Kinetiq() {
  return (
    <DefaultLayout>
        <section className="flex noscroll flex-col items-center justify-center gap-4  md:py-4">
            <div className=" items-center inline-block max-w-4xl text-center ">
                <h1 className={title({ class: " lg:text-6xl antialiased md:text-6xl font-light text-zinc-400" })}>
                   Kinetiq
                </h1>
            </div>
            <div className='flex items-center justify-evenly'>
            <Image
                width={600}
                alt="kinetiq"
                src="/assets/kinetiq.png"
                className='rounded-md'
            />
            </div>
            <div
            className=" px-6 shadow-lg antialiased items-center text-left justify-evenly  max-w-2xl flex flex-col ">
                <div className='flex flex-row gap-4 justify-evenly'>
                    <Button color="primary"
                        className='bg-black text-white rounded-md border-2 border-zinc-300'
                        as={Link}href='https://github.com/schneble/kinetiq-vite.git'>
                            <FaGithub size={20}/>
                    </Button>
                    <Button
                        className='bg-black text-white rounded-md border-2 border-zinc-300'
                        color="primary"
                        as={Link}
                        href='https://bd223d15.kinetiq-vite.pages.dev'>
                            <HiGlobeAlt size={20} />
                    </Button>
                </div>
                <h1 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Overview
                </h1>
                <h2 className= " antialiased backdrop-blur-sm mb-2  font-normal text-base px-2 flex flex-col">
                Kinetiq is an application that I built using Vite to serve as a modern lightweight boilerplate for front-end development.
                The goal was to create a foundation that streamlines the process of building fast and scalable web applications while leveraging the latest technologies.
                </h2>
                <h2 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Key Features
                </h2>
                <ul className='flex  p-2 flex-col '>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                        Dynamic and Reusable Components
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                        Designed Reusable components to reduce repetition and streamline the development process.
                        Each designed with flexibility in mind, making it simple to adapt for different use cases.
                    </li>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                        TypeScript Integration
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                        Typescript used to enforce type safety across the project, improving code clarity and reducing runtime bugs.
                        This makes the codebase more maintainable and easier for others to understand.
                    </li>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                        Optimized Development Workflow
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                        Using Vite, I achieved near-instant build times and hot module replacement (HMR), which significantly improved my development speed and feedback loop. This allowed me to test changes quickly and iterate efficiently, making the process more enjoyable and productive.
                    </li>
                </ul>
                <h2 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Technologies used
                </h2>
                <ul className='p-1'>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 mb-2 rounded-sm'>
                        Vite was chosen for its speed and developer experience, while React provided a robust framework for building component-based UIs.
                        Utilized Typescript to ensure strong typing throughout the build to minimize errors and improve maintainability.
                        Styled with Tailwind so that I was able to focus on design without leaving the editor.
                    </li>
                </ul>
            </div>
      </section>
    </DefaultLayout>
  );
}
