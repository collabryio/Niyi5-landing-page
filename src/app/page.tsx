// components
import { Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Contact from "./contact";

export default function Campaign() {
  return (
    <>
      <Hero />
      <Feature />
      <MobileConvenience />
      <Contact />
      <Footer />
    </>
  );
}
