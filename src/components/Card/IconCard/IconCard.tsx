import React from 'react';
import styles from './IconCard.module.scss';
import { ServiceType } from '@/data/services/webApp';

export default function IconCard({ service }: { service: ServiceType }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <service.Icon />
      </div>
      <div className={styles.content}>
        <h3 className='my-regular small'>{service.title}</h3> 
        <p className='my-xs'>{service.description}</p>
      </div>
    </div>
  )
}
