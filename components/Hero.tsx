import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Image from "next/image";
import me from "../public/me.jpeg";
import Link from "next/link";

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Louis",
      "Welcome to my <Portfolio />",
      "Using Next.js & TypeScript",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={me}
        alt={"me"}
        width={150}
        className={"rounded-full relative mx-auto object-cover"}
      />
      <div className="z-20">
        <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px]"}>
          FullStack Developer
        </h2>

        <h1 className={"text-4xl lg:text-5xl font-semibold scroll-px-10"}>
          <span className={"mr-3"}>{text}</span>
          <Cursor cursorColor={"#F7AB0A"} />
        </h1>
        <div className={"pt-5"}>
          <Link href="#about">
            <button className={"heroButton"}>About</button>
          </Link>
          <Link href="#experience">
            <button className={"heroButton"}>Experience</button>
          </Link>
          <Link href="#skills">
            <button className={"heroButton"}>Skills</button>
          </Link>
          <Link href="#projects">
            <button className={"heroButton"}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
