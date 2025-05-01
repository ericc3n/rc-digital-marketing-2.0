import React from 'react';
import styles from './LeftIconCard.module.scss';
import { ServiceType } from '@/data/solutions';

export default function LeftIconCard({ Icon, title, description }: ServiceType ) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.textContent}>
        <h3>{title}</h3>
        <p className='my-xs'>{description}</p>
      </div>
    </div>
  )
}
