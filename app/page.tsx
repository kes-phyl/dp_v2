import Image from "next/image";
import { Hero, Socials, About } from "@/components";

export default function Home() {
  return (
    <main>
  {/* <div className="container mt-60">
  <div className="box item-center">
    <span className="title">GLASS EFFECT</span>
    <div>
      <strong>JOE WATSON SBF</strong>
      <p>0000 000 000 0000</p>
      <span>VALID</span> <span>01/28</span>
    </div>
  </div>
</div> */}
<Hero/>
<About/>
  <Socials/>
    </main>
  );
}
