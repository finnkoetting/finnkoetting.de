import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import ContactCta from "@/components/sections/contact-cta";

import heroImage from "@/public/hero-image.svg";

export default function Home() {
  return (
    <>
      <Hero imageSrc={heroImage} />
      <About />
      <Services />
      <Projects />
      <ContactCta />
    </>
  );
}
