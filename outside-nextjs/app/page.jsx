import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import SocialStrip from "@/components/sections/SocialStrip";
import Story from "@/components/sections/Story";
import Learn from "@/components/sections/Learn";
import Testimonials from "@/components/sections/Testimonials";
import Compare from "@/components/sections/Compare";
import Bonus from "@/components/sections/Bonus";
import Summary from "@/components/sections/Summary";
import Offer from "@/components/sections/Offer";
import Author from "@/components/sections/Author";
import Support from "@/components/sections/Support";
import Footer from "@/components/sections/Footer";
import StickyBar from "@/components/sections/StickyBar";
import ClientFx from "@/components/ClientFx";
import ParticleField from "@/components/fx/ParticleField";

export default function Home() {
  return (
    <>
      <ParticleField />
      <TopBar />
      <main>
        <Hero />
        <SocialStrip />
        <Story />
        <Learn />
        <Testimonials />
        <Compare />
        <Bonus />
        <Summary />
        <Offer />
        <Author />
        <Support />
      </main>
      <Footer />
      <StickyBar />
      <ClientFx />
    </>
  );
}
