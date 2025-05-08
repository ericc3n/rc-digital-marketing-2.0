import { services } from '@/data/services/gestionale';
import React from 'react';
import './GestionaleSection.scss';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function GestionaleSection() {
  return (
    <div className='section gestionale'>
      <div className="text-content">
        <FadeIn delay={0}>
          <h2>Gestionale</h2>
          <p className='my-regular medium'>Un gestionale è un software  progettato per raccogliere, organizzare e visualizzare dati in modo efficiente.</p>
          <p className='my-xs medium'>Funziona direttamente su un dispositivo o rete aziendale, senza la necessità di una connessione internet continua.</p>
        </FadeIn>
      </div>
      <div className="cards">
        {
          services.map((service, index) => (
            <FadeIn key={index} delay={index * .2}>
              <div className="card">
                <service.Icon className='icon' />
                <h3 className='my-s small'>{service.title}</h3>
              </div>
            </FadeIn>
          ))
        }
      </div>
    </div>
  )
}
