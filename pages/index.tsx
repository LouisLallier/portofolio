import Head from "next/head";
import { GetServerSideProps } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typing";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className={"snap-start"}>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className={"snap-center"}>
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className={"snap-center"}>
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className={"snap-start"}>
        <Skills skills={skills} />
      </section>
      <section id="projects" className={"snap-start"}>
        <Projects projects={projects} />
      </section>
      <section id="contact" className={"snap-start"}>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className={"sticky bottom-5 w--min-full cursor-pointer "}>
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
  };
};
