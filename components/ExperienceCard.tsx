import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-4 h-[570px] w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
      }
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={"w-32 h-32 rounded-full object-cover object-center"}
        src={urlFor(experience?.companyImage).url()}
        alt="logo"
      />
      <div className={"px-0 md:px-10"}>
        <h4 className={"text-4xl font-light"}>{experience.jobTitle}</h4>
        <p className={"font-bold text-2xl mt-1"}>{experience.company}</p>
        <div className={"flex space-x-2 my-2"}>
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={"logoTS"}
              width={30}
              height={30}
            />
          ))}
        </div>
        <p className={"uppercase py-5 text-gray-300"}>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul
          className={
            "list-disc space-y-4 ml-5 text-lg md:h-52 overflow-y-scroll"
          }
        >
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
