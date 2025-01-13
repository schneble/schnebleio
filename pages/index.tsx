import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Connect from "@/components/Connect";
import ProjectCards from "@/components/Workscard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <div>
          <h1 className="w-full flex mb-3 lg:text-5xl text-w font-mono text-3xl mgray text-black antialiased text-left">
            Hey, I&apos;m
            <span className="text-surface50 font-normal font-mono ml-2">
              Jack
            </span>
          </h1>
          <h2
            className={subtitle({
              class:
                "font-mono tracking-wide font-light antialiased text-sm  justify-evenly items-center text-surface400 text-left",
            })}
          >
            Software Developer focused on building responsive, accessible
            applications and commited to continuous improvement.
          </h2>
          <h2
            className={subtitle({
              class:
                "font-mono tracking-wide font-light antialiased text-sm  justify-evenly items-center text-surface400 text-left",
            })}
          >
            Continuously seeking ways to leverage the latest technologies and
            refine my approach to deliver effective solutions.
          </h2>
          <div className="flex flex-col  pb-12  mt-6 text-left cursor-default mob-width justify-between ">
            <Connect />
          </div>
          <div className="mt-6 mb-4">
            <p className=" text-sm  text-x400">A few recent projects </p>
          </div>
          <div className=" ">
            <ProjectCards />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
