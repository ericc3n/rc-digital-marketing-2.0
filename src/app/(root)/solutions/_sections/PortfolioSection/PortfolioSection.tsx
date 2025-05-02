import React from 'react';
import './PortfolioSection.scss';
import { services } from '@/data/services/portfolio';
import IconCard from '@/components/Card/IconCard/IconCard';

export default function PortfolioSection() {
  return (
    <div className='section portfolio'>
      <div className="text-content">
        <h2>Portfolio</h2>
        <p className='medium my-regular'>Un PortfolioSection è una raccolta organizzata di tutte le informazioni essenziali della tua attività (contatti, recensioni, servizi, ecc), in un sito web.</p>
      </div>
      <div className="cards">
        {
          services.map((service, index) => <IconCard key={index} service={service} />)
        }
      </div>
    </div>
  )
}
