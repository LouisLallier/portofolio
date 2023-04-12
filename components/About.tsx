import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typing";
import { urlFor } from "@/sanity";

type Props = { pageInfo: PageInfo };

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className={
        "h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
      }
    >
      <h3
        className={
          "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"
        }
      >
        about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        // @ts-ignore
        src={urlFor(pageInfo?.profilePicture).url()}
        className={
          "hidden md:flex -mb-20 w-56 flex-shrink-0 object-cover md:w-64 xl:w-96 rounded rounded-md md:mb-0"
        }
      />
      <div className={"space-y-10 px-0 md:px-10"}>
        <h4 className={"text-4xl font-semibold"}>
          Here is a{" "}
          <span className={"underline decoration-[#F7AB0A]/50"}>little</span>{" "}
          background
        </h4>
        <p className={"text-base"}>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
