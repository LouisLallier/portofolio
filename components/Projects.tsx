import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];
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
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680799971/production/Capture_d_e%CC%81cran_2023-04-06_a%CC%80_18.52.09_bhn5jd.png"
              width={80}
              height={80}
              alt={"imageProject"}
            />
            <div className={"space-y-10 px-0 md:px-10 max-w-6xl"}>
              <h4 className={"text-4xl font-semibold text-center"}>
                <span className={"underline decoration-[#F7AB0A]/50"}>
                  Project {i + 1} of {projects.length}
                </span>
              </h4>
              <p className={"text-lg text-center md:text-left"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium architecto autem debitis earum, eos facilis minus
                nulla placeat, quisquam tempora unde voluptate. Beatae
                consectetur cupiditate doloremque eaque eos illum molestias,
                mollitia neque nulla officiis placeat quaerat quia quo
                repudiandae veritatis voluptas voluptate! Dolore dolorem illo
                impedit molestias optio perferendis sapiente.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
