import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = ({}: Props) => {
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
        src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680797346/production/laptop_xk82ea.jpg"
        className={
          "-mb-20 w-56 flex-shrink-0 object-cover md:w-64 xl:w-96 rounded rounded-xl md:mb-0"
        }
      />
      <div className={"space-y-10 px-0 md:px-10"}>
        <h4 className={"text-4xl font-semibold"}>
          Here is a{" "}
          <span className={"underline decoration-[#F7AB0A]/50"}>little</span>{" "}
          background
        </h4>
        <p className={"text-base"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          amet asperiores consectetur cumque, earum fuga, fugiat molestias nam
          nemo nostrum quod repellat tempora. Accusantium animi autem corporis
          dignissimos distinctio dolorem dolores, doloribus earum, fuga in ipsa
          maxime neque nostrum officia officiis perferendis provident quae quis
          rem saepe! Autem consectetur consequuntur deserunt distinctio
          doloribus ea eaque eveniet, exercitationem maiores nam nesciunt nihil
          officia praesentium quos, sequi suscipit tempore tenetur velit
          voluptate, voluptatibus? Accusamus animi eligendi esse, fugiat nihil
          obcaecati perspiciatis quaerat quidem sunt vitae! Deserunt, expedita
          illo illum incidunt iste laudantium nesciunt nihil non nulla odit
          officiis quam quo suscipit unde?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
