import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero, { LampHero } from "@/components/Hero";
import RecentProjects from "@/components/Project";
import React from "react";

const page = () => {
  return (
    <div>
      <section id="/">
        <LampHero />
      </section>
      <section id="projects">
        <RecentProjects />
      </section>

      <section id="about">
        <AboutUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default page;
