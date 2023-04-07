import Head from "next/head";
import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
      <section id="skills" className={"snap-center"}>
        <Skills />
      </section>
      {/*    PROJECTS*/}
      <section id="projects" className={"snap-center"}>
        <Projects />
      </section>
      {/*    CONTACT ME*/}
    </div>
  );
};

export default Home;
