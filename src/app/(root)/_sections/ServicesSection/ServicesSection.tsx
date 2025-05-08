import GridFour from '@/ui/GridFour/GridFour';
import React from 'react';
import { services } from '@/data/solutions';
import LeftIconCard from '@/components/Card/LeftIconCard/LeftIconCard';
import "./ServicesSection.scss";
import { FadeIn } from '@/components/Animation/FadeIn';

export default function ServicesSection() {
  return (
    <div className='section--margin services'>
      <FadeIn delay={0}>
        <h2 className='center'>I nostri servizi</h2>
      </FadeIn>
      <GridFour className='my-l'>
        {
          services.map((service, index) => (
          <FadeIn key={index} direction='up' delay={index * .2}>
            <LeftIconCard
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          </FadeIn>))
        }
      </GridFour>
    </div>
  )
}
