import React from 'react';
import './SMMSection.scss';
import { services } from '@/data/services/SMM';
import IconCard from '@/components/Card/IconCard/IconCard';

export default function SMMSection() {
  return (
    <div className='section smm'>
      {
        services.map((service, index) =>(<IconCard service={service} key={index} />))
      }
      <div className="text-content">
        <h2>SMM</h2>
        <p className="my-regular medium">Il Social Media Management consiste nella gestione dei social media</p>
      </div>
    </div>
  )
}
