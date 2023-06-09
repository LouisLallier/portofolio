import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typing";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header
      className={
        "sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center"
      }
    >
      <motion.div
        className={"flex flex-row items-center"}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
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
