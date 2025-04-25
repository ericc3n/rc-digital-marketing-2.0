import React from 'react';
import styles from './TestimonialCard.module.scss';
import { TestimonialType } from '@/data/testimonials';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <div className={styles.card}>
      <div className={styles.headerCard}>
        <div className={styles.userInfo}>
          <Image
            src={testimonial.imgSrc}
            alt='user profile'
            width={48}
            height={48} 
            style={{ borderRadius: '100%' }}
          />
          <div className={styles.textContent}>
            <p className="semibold">{testimonial.name}</p>
            <p className="small" style={{ marginTop: '4px' }}>
              <Link target='_blank' href={`https://www.${testimonial.domain}`} className='simple-link'>{testimonial.domain}</Link>
            </p>
          </div>
        </div>
        <FaQuoteLeft className={styles.icon} />
      </div>
      <p className='my-m'>{testimonial.quote}</p>
    </div>
  )
}
