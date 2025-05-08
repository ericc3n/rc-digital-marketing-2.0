import React from 'react';
import './HeroSection.scss';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function HeroSection() {
  return (
    <FadeIn direction='pop' delay={0}>
      <div className='hero section'>
        <h1>Le Nostre Soluzioni</h1>
        <p className='my-regular'>Per Masimizare le tue esigenze</p>
      </div>
    </FadeIn>

  )
}
