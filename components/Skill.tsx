import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className={"group relative flex cursor-pointer"}>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className={
          "rounded-full object-cover w-20 h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        }
      />
      <div
        className={
          "absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white rounded-full h-20 w-20 z-0"
        }
      >
        <div className={"flex items-center justify-center h-full"}>
          <motion.p
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={"text-2xl font-bold text-black opacity-100"}
          >
            {skill.progress}%
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
