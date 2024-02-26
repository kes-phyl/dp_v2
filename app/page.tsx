import Image from "next/image";
import { Hero, Socials, About, Experience, Projects } from "@/components";

export default function Home() {
  return (
    <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Socials/>
    </main>
  );
}
