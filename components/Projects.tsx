import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/typing";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={
        "h-screen relative flex overflow-hidden flex-col  text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
      }
    >
      <h3
        className={
          " absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              src={urlFor(project.image).url()}
              width={120}
              height={80}
              alt={"imageProject"}
            />
            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#F7AB0A]/50"}>
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                {project?.title}
              </h4>
              <div className={"flex items-center space-x-2 justify-center"}>
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={"logoTS"}
                    width={30}
                    height={30}
                  />
                ))}
              </div>

              <p className={"text-lg text-center md:text-left"}>
                {project.summary}
              </p>
              <Link href={project.linkToBuild}>
                <span className={"underline decoration-[#F7AB0A]/50 pt-2"}>
                  See more here on GitHub
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
