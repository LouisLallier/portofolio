import Head from "next/head";
import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      {/*    HERO*/}
      <section id="hero" className={"snap-center"}>
        <Hero />
      </section>
      {/*    ABOUT*/}
      {/*    EXPERIENCE*/}
      {/*    SKILLS*/}
      {/*    PROJECT*/}
      {/*    CONTACT ME*/}
    </div>
  );
};

export default Home;
