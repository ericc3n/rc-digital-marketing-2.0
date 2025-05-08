import React from 'react';
import './SMMSection.scss';
import { services } from '@/data/services/SMM';
import IconCard from '@/components/Card/IconCard/IconCard';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function SMMSection() {
  return (
    <div className='section smm'>
      {
        services.map((service, index) =>(
          <FadeIn key={index} delay={(services.length - index) * .2}>
            <IconCard service={service} />
          </FadeIn>
        ))
      }
      <FadeIn delay={0}>
        <div className="text-content">
          <h2>SMM</h2>
          <p className="my-regular medium">Il Social Media Management consiste nella gestione dei social media</p>
        </div>
      </FadeIn>
    </div>
  )
}
