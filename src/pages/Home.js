import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';
import {Video} from '../Video/Video.js';
import temp from '../assets/Seoul.mp4';

export default function Home() {
  return (
    <div>
      <Video width="100%" height="100%" autoPlay="autoPlay" muted loop>
        <source src={temp} type="video/mp4" />
      </Video>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection />  */}
      <ContactBanner />
    </div>
  );
}
