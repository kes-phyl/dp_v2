import Image from "next/image";
import { Hero, Socials, About, Experience, Projects, Contact, Footer} from "@/components";

export default function Home() {
  return (
    <main>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        <Socials/>
    </main>
  );
}
