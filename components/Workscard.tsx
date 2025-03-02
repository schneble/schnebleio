import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Tabs, Tab, Button, Link } from "@nextui-org/react";
import { HiGlobeAlt } from "react-icons/hi";

import { GithubIcon } from "./icons";
import { GoSeekGuardButtons } from "./downloadable/GoSeekButtons";
import { FileScopeButtons } from "./downloadable/FileScopeButtons";
import AnnouncementBanner from "./announcement/AnnouncementBanner";

import { projectsData } from "@/config/worksdata";
import { Project } from "@/config/project";

const ProjectCards = () => {
  const [, setSelectedProject] = React.useState(projectsData[0]);

  const renderProjectOverview = (project: Project) => (
    <div className="flex flex-col lg:flex-row gap-8 p-2">
      {/* Image Section gradient overlay */}
      <div className=" relative">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
          <div className=" inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          <Image
            alt={project.title}
            className="w-f6 object-cover xai-border shadow-xai-shadow transition-transform duration-500 hover:scale-102 opacity-90"
            src={project.imageUrl}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl mt-2 font-semibold text-surface50">
              {project.title}
            </h3>
            <span className="px-2 py-0.5 text-xs font-medium bg-surface950 text-surf7 rounded-full border border-zinc-800">
              Latest
            </span>
          </div>

          <p className="text-surface600 text-sm leading-relaxed">
            {project.fullDescription}
          </p>

          <div>{project.announcement && <AnnouncementBanner />}</div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 py-3">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="
                flex text-center justify-center items-center text-surface400 gap-1.5 bg-surface900/50
                px-2 py-1.5 rounded-full border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              >
                <tech.icon className="flex justify-center text-surface400" />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.githubLink && (
              <Button
                className="bg-zinc-900 noselect hover:bg-zinc-800  text-zinc-100 border border-zinc-800/50 rounded-lg "
                startContent={<GithubIcon size={16} />}
              >
                <Link
                  className="text-zinc-100 text-sm"
                  href={project.githubLink}
                >
                  View Source
                </Link>
              </Button>
            )}
            {project.liveLink && (
              <Button
                className="bg-zinc-800 noselect hover:bg-zinc-700  text-zinc-200 border border-zinc-700/50 rounded-lg "
                startContent={<HiGlobeAlt size={16} />}
              >
                <Link className="text-zinc-200 text-sm" href={project.liveLink}>
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* additional components */}
        <div>
          {project.goseekFeature && <GoSeekGuardButtons />}
          {project.filescopeFeature && <FileScopeButtons />}
        </div>
      </div>
    </div>
  );

  const renderProjectFeatures = (project: Project) => (
    <div className="mt-4 mx-2 space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-x400 text-sm mb-3 mt-1 ml-2 font-medium">
          Project Features
        </h4>
        <div className="px-2 mx-3 mt-2 flex-1 bg-zinc-800/50 ml-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-1 pt-2 p-1 ">
        {project.features.map((feature, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            className="
            group bg-surface950/40 rounded-xl p-4 hover:bg-surface900 border
            border-surface900/70 ransition-all duration-300 hover:border-surf8/50"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="space-y-z">
              <div className="flex items-center gap-2">
                <div className=" rounded-lg text-zinc-200 transition-colors">
                  <feature.icon />
                </div>
                <h3 className="text-zinc-200 font-medium">{feature.title}</h3>
              </div>

              <div className="mt-2">
                {feature.technicalDetails?.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-surface600 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Main content area */}
      <div>
        <div className="flex justify-center items-center text-center">
          <p className=" xl:text-transparent opacity-10 flex items-center text-center tracking-wider font-medium ">
            <span className="text-lg pr-10">←</span> scroll{" "}
            <span className="text-lg pl-10"> → </span>
          </p>
        </div>
        <Tabs
          aria-label="Project tabs"
          className="
          w-80 xl:w-full lg:w-full lg:ml-0  xl:ml-0 ml-4 p-1 rounded-lg text-center shadow-xai-shadow xai-border
          bg-surface950 py-3 flex flex-row justify-evenly"
          classNames={{
            tabList: "gap-0.5  ",
            tab: " py-6 text-sm tracking-tighter font-semibold",
            tabContent:
              "group-data-[selected=true]:text-white/95  text-surface600",
            cursor: " xai-bg focus:none border-none ",
          }}
          radius="lg"
          variant="light"
          onSelectionChange={(key) => {
            const project = projectsData.find((p) => p.title === key);

            if (project) setSelectedProject(project);
          }}
        >
          {projectsData.map((project) => (
            <Tab key={project.title} title={project.title}>
              <div className="xai-border bg-x950 shadow-xai-shadow mt-3 pb-3  px-0.5 rounded-xl ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.title}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderProjectOverview(project)}
                    {renderProjectFeatures(project)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectCards;
