import React from 'react';
import './WebappSection.scss';
import GridFour from '@/ui/GridFour/GridFour';
import { services } from '@/data/services/webApp';
import ServiceCard from '@/components/Card/ServiceCard/ServiceCard';

export default function WebappSection() {
  return (
    <GridFour className='section--margin web-app'>
      <div className="text-content">
        <h2>Web app</h2>
        <p className="my-xs medium">{"Una web app è un'applicazione software che funziona direttamente nel browser, senza la necessità di installazioni sui dispositivi degli utenti."}</p>
      </div>
      {
        services.map((service, index) => (<ServiceCard key={index} service={service} />))
      }
    </GridFour>
  )
}
