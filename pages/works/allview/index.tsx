import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/react";
import { subtitle } from "@/components/primitives";
 import { Link, Button } from "@nextui-org/react";
 import { FaGithub } from "react-icons/fa";
 import { HiGlobeAlt } from "react-icons/hi";

export default function Allview() {
    return (
      <DefaultLayout>
          <section className="flex flex-col md:py-2 items-center justify-center">
            <div className='flex flex-col'>
                <Image
                    width={450}
                    alt="blackroulette"
                    src="/assets/allview.png"
                    className='rounded-md mb-6 flex flex-col'
                />
            </div>
            <div
            className=" px-6 shadow-lg antialiased items-center text-left justify-evenly  max-w-2xl flex flex-col ">
                <div
                className='flex flex-row gap-4 justify-evenly'>
                    <Button
                    color="primary"
                    className='bg-black text-white rounded-md border-2 border-zinc-300'
                    as={Link}
                    href='https://github.com/j-schneble/all-View'>
                        <FaGithub size={20}/>
                    </Button>
                    <Button
                        className='bg-black text-white rounded-md border-2 border-zinc-300'
                        color="primary"
                        as={Link}
                        href='https://main.d103fh40oxa2yj.amplifyapp.com'>
                            <HiGlobeAlt size={20} />
                    </Button>
                </div>
                <h1 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Overview
                </h1>
                <h2 className= " antialiased backdrop-blur-sm mb-2  font-normal text-base px-2 flex flex-col">
                    In this project, I built a web-based inventory management system for tracking and managing stock in real-time.
                    The system enables streamlined inventory control, including product tracking, stock updates, and data visualization,
                    to improve efficiency in resource management.
                </h2>
                <h2 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Key Features
                </h2>
                <ul className='flex flex-col p-1'>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                            Environment Setup for EC2 Instance
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                            Developed a comprehensive guide for setting up an EC2 instance,
                            including the installation of Node.js via Node Version Manager (NVM),
                            Git configuration, and environment variable setup.
                            This process ensured that the application environment was fully prepared for production deployment.
                    </li>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                            Process Management with PM2
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                            Implemented PM2 as a production process manager to oversee a Node.js application, enabling continuous operation and automatic restarts in case of failures.
                            Configured PM2 to manage application processes during system reboots, enhancing the stability and reliability of cloud applications.
                    </li>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                            Persistent Storage Configuration
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                            Configured persistent data storage and managed state across user sessions using Redux Persist, gaining hands-on experience with data retention strategies for AWS-hosted applications.
                            Leveraged local storage and integrated AWS services, such as Amazon S3, for scalable storage solutions.
                    </li>
                    <h2 className='font-medium  mt-2 mb-2 text-lg px-2 antialiased backdrop-blur-sm py-2'>
                            Cloud Deployment Best Practices
                    </h2>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 rounded-sm'>
                            Established best practices for cloud deployment, focusing on the use of environment variables, secure access protocols, and production-ready server configurations.
                            Created a continuous deployment pipeline utilizing AWS services, facilitating efficient application updates and maintenance.
                    </li>
                </ul>
                <h2 className={
                    subtitle({ class: " border-b-2 border-slate-100 py-1 pb-2 mt-4 font-medium rounded-sm   px-2 flex flex-col" })}>
                        Challenges
                </h2>
                <ul className='p-1'>
                    <li className='bg-slate-50/10 antialiased backdrop-blur-sm p-2 mb-2 rounded-sm'>
                        Leveraging AWS architecture diagrams to visualize service connections,
                        simplifying complex interactions and enhancing system manageability were crucial for gaining a deeper understanding of AWS services.
                    </li>
                </ul>
            </div>
        </section>
    </DefaultLayout>
    )
}
