import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header
      className={
        "sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center"
      }
    >
      <motion.div
        className={"flex flex-row items-center"}
        initial={
          isMounted
            ? {
                x: -500,
                opacity: 0,
                scale: 0.5,
              }
            : false
        }
        animate={
          isMounted
            ? {
                x: 0,
                opacity: 1,
                scale: 1,
              }
            : false
        }
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <div
        className={"flex flex-row items-center text-gray-300 cursor-pointer"}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <Link href="#contact">
          <p
            className={"uppercase hidden md:inline-flex text-sm text-gray-400"}
          >
            Get in touch
          </p>
        </Link>
      </div>
    </header>
  );
}
