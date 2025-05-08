import React from 'react';
import './WebappSection.scss';
import GridFour from '@/ui/GridFour/GridFour';
import { services } from '@/data/services/webApp';
import ServiceCard from '@/components/Card/ServiceCard/ServiceCard';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function WebappSection() {
  return (
    <GridFour className='section--margin web-app'>
      <FadeIn delay={0}>
        <div className="text-content">
          <h2>Web app</h2>
          <p className="my-xs medium">{"Una web app è un'applicazione software che funziona direttamente nel browser, senza la necessità di installazioni sui dispositivi degli utenti."}</p>
        </div>
      </FadeIn>
      {
        services.map((service, index) => (
          <FadeIn key={index} delay={index * .2}>
            <ServiceCard service={service} />
          </FadeIn>
        ))
      }
    </GridFour>
  )
}
