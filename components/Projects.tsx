import React from "react";
import Image from "next/image";

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div>
            <Image
              src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680799971/production/Capture_d_e%CC%81cran_2023-04-06_a%CC%80_18.52.09_bhn5jd.png"
              width={80}
              height={80}
              alt={"imageProject"}
            />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
