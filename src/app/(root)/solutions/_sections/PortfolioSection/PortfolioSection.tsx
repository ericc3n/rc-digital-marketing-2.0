import React from 'react';
import './PortfolioSection.scss';
import { services } from '@/data/services/portfolio';
import IconCard from '@/components/Card/IconCard/IconCard';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function PortfolioSection() {
  return (
    <div className='section portfolio'>
      <div className="text-content">
        <FadeIn delay={0}>
          <h2>Portfolio</h2>
          <p className='medium my-regular'>Un PortfolioSection è una raccolta organizzata di tutte le informazioni essenziali della tua attività (contatti, recensioni, servizi, ecc), in un sito web.</p>
        </FadeIn>
      </div>
      <div className="cards">
        {
          services.map((service, index) => (
            <FadeIn key={index} delay={index * .2}>
              <IconCard service={service} />
            </FadeIn>
          ))
        }
      </div>
    </div>
  )
}
