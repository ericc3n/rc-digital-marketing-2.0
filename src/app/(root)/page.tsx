import React from 'react';
import HeroSection from './_sections/HeroSection';
import ServicesSection from './_sections/ServicesSection/ServicesSection';
import WhyChooseUs from './_sections/WhyChooseUs/WhyChooseUs';
import TestimonialsSection from './_sections/TestimonialsSection/TestimonialsSection';
import ClosureSection from './_sections/ClosureSection/ClosureSection';

export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClosureSection />
    </>
  )
}
