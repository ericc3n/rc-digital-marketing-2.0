import GridFour from '@/ui/GridFour/GridFour';
import React from 'react';
import { services } from '@/data/services';
import LeftIconCard from '@/components/Card/LeftIconCard';
import "./ServicesSection.scss";

export default function ServicesSection() {
  return (
    <div className='services-section'>
      <h2>I nostri servizi</h2>
      <GridFour className='my-l'>
        {
          services.map((service, index) => (<LeftIconCard
            key={index}
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />))
        }
      </GridFour>
    </div>
  )
}
