import { ParallaxComponent } from '@/components/ui/parallax-scrolling';
import { profile } from '@/data/portfolioData';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <Navbar />
      <main>
        <ParallaxComponent id="home" title={profile.name}>
          <Hero />
        </ParallaxComponent>
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
