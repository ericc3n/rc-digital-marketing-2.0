import React from 'react';
import './TestimonialsSection.scss';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/Card/TestimonialCard/TestimonialCard';

export default function TestimonialsSection() {
  return (
    <div className='section testimonials'>
      <h2 className='center'>Testimonianze</h2>
      <div className="grid-layout my-xl">
        {
          testimonials.map((testimonial, index) => (<TestimonialCard key={index} testimonial={testimonial} />))
        }
      </div>
      {/* sviluppare carosello */}
    </div>
  )
}
