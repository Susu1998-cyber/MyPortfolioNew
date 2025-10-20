import { Header } from "../components";
import { Footer } from "../components";
import { Hero } from "../components";
import { Contact } from "../components";
import ScrollButtons from "./ui/scrollButtons";
import { Project } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Project />
      <Contact />
      <Footer />
      <ScrollButtons />
    </>
  );
}
