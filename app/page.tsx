import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutme from "@/components/Aboutme";
import WorkedWith from "@/components/WorkedWith";
import FeaturedWork from "@/components/FeaturedWork";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Aboutme />
        <WorkedWith />
        <FeaturedWork />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
