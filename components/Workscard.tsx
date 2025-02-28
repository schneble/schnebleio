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
            className="w-full object-cover xai-border shadow-xai-shadow transition-transform duration-500 hover:scale-102 opacity-90"
            src={project.imageUrl}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-surface50">
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
                className="flex items-center gap-1.5 bg-surface900/50 justify-center px-2 py-1.5 rounded-full border border-zinc-800/50 hover:border-zinc-700/50 transition-colors"
              >
                <tech.icon className="text-surface400" size={14} />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
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
    <div className="mt-4 space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-x400 text-sm font-medium">Project Features</h4>
        <div className="h-px flex-1 bg-zinc-800/50 ml-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.features.map((feature, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-surface950/40 rounded-xl p-4 hover:bg-surface950/60 transition-all duration-300 border border-surf8/20 hover:border-surf8/50"
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
      <div className="bg-gradient-to-b from-surf7/10 to-surf8/5 rounded-2xl  p-1.5  ">
        <div className="flex items-center text-center justify-evenly gap-10 mt-2 mb-1 flex-row">
          <p className="   text-sm xl:text-transparent text-x400/15 brightness-110 font-medium ">
            <span className="text-lg mr-5">←</span> scroll{" "}
            <span className="text-lg ml-5"> → </span>
          </p>
        </div>
        <Tabs
          aria-label="Project tabs"
          className="w-80 xl:w-full xl:ml-0 mb-6 ml-2 p-1 shadow-xai-shadow mt-1 xai-bg rounded-2xl py-2.5 flex flex-row justify-evenly"
          classNames={{
            tabList: "gap-1  ",
            tab: "px-2.5 xl:px-4 py-5 text-sm font-medium",
            tabContent:
              "group-data-[selected=true]:text-white/95  text-x400/80",
            cursor: "xai-border2 focus:none bg-surf8/20",
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
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectCards;
