// "use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import Experience from "../components/Experience";
import RecentProjects from "../components/RecentProjects";
import { FloatingNav } from "./../components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import Footer from "../components/Footer";

import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
// const Grid = dynamic(() => import("../components/Grid"), { ssr: false });
// const Experience = dynamic(() => import("../components/Experience"), {
//   ssr: false,
// });
// const RecentProjects = dynamic(() => import("../components/RecentProjects"), {
//   ssr: false,
// });
// const FloatingNav = dynamic(() => import("../components/ui/FloatingNav"), {
//   ssr: false,
// });
// const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
