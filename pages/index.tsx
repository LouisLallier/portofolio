import Head from "next/head";
import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      {/*    HERO*/}
      <section id="hero" className={"snap-start"}>
        <Hero />
      </section>
      {/*    ABOUT*/}
      <section id="about" className={"snap-center"}>
        <About />
      </section>
      {/*    EXPERIENCE*/}
      <section id="experience" className={"snap-center"}>
        <WorkExperience />
      </section>
      {/*    SKILLS*/}
      <section id="skills" className={"snap-start"}>
        <Skills />
      </section>
      {/*    PROJECTS*/}
      <section id="projects" className={"snap-start"}>
        <Projects />
      </section>
      {/*    CONTACT ME*/}
      <section id="contact" className={"snap-start"}>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className={"sticky bottom-5 w-full cursor-pointer "}>
          <div
            className={
              "h-10 w-10 mx-auto rounded-full filter grayscale hover:grayscale-0 cursor-pointer bg-[#F7AB0A] opacity-50"
            }
          />
        </footer>
      </Link>
    </div>
  );
};

export default Home;
