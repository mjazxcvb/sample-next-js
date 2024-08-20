import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Tools from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MJA | Portfolio",
  description: 'React, React Native, Next.js, Remix.js',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Intro />
      <Experience />
      <Tools />
      <Contact />
    </main>
  );
}
