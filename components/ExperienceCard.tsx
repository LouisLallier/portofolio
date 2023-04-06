import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = ({}: Props) => {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
      }
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={"w-32 h-32 rounded-full object-cover object-center"}
        src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680800538/production/Capture_d_e%CC%81cran_2023-04-06_a%CC%80_19.02.05_sm6ncm.png"
        alt="logo"
      />
      <div className={"px-0 md:px-10"}>
        <h4 className={"text-4xl font-light"}>Le REACTEUR</h4>
        <p className={"font-bold text-2xl mt-1"}>Formation</p>
        <div className={"flex space-x-2 my-2"}>
          <Image
            src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680801418/production/ts_logo_qmdca8.svg"
            alt={"logoTS"}
            width={30}
            height={30}
          />
          {/*techUSED*/}
          {/*techUSED*/}
        </div>
        <p className={"uppercase py-5 text-gray-300"}>
          Stated work... - Ended...
        </p>
        <ul className={"list-disc space-y-4 ml-5 text-lg"}>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
