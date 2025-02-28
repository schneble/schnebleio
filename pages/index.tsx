import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Connect from "@/components/Connect";
import ProjectCards from "@/components/Workscard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <div>
          <header className="p-2 ">
            <h1 className="w-full flex mt-6  text-2xl font-mono  mgray text-black antialiased text-left">
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
          </header>
          <div className="flex ml-2 border-b-1 border-surf8/20 pb-8 flex-col ">
            <Connect />
          </div>
          <div className="  mt-20 pt-18">
            <p className="ml-2 font-mono tracking-wide font-light antialiased text-sm  text-surface400">
              A few recent projects{" "}
            </p>
          </div>
          <div className="mt-6">
            <ProjectCards />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
