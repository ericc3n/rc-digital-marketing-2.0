import React from 'react';
import styles from './ServiceCard.module.scss';
import { ServiceType } from '@/data/services/webApp';

export default function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <service.Icon />
      </div>
      <div className={styles.textContent}>
        <h3>{service.title}</h3>
        <p className='my-xs'>{service.description}</p>
      </div>
    </div>
  )
}
