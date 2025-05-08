import React from 'react';
import './TestimonialsSection.scss';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/Card/TestimonialCard/TestimonialCard';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function TestimonialsSection() {
  return (
    <div className='section testimonials'>
      <FadeIn delay={0}>
        <h2 className='center'>Testimonianze</h2>
      </FadeIn>
      <div className="grid-layout my-xl">
        {
          testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * .2}>
              <TestimonialCard testimonial={testimonial} />
            </FadeIn>
          ))
        }
      </div>
      {/* sviluppare carosello */}
    </div>
  )
}
