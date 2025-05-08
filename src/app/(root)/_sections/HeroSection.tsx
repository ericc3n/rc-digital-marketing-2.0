import TwoColumns from '@/ui/TwoColumns/TwoColumns';
import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function TwoColumnsSection() {
  return (
    <TwoColumns>
      <FadeIn>
        <div className="text-content">
          <h1>Porta il Tuo <span className="gradient-text">Business</span> al Livello Successivo</h1>
          <p className='my-m'>Credi che sia impossibile? Scopri come abbiamo già aiutato attività simile alla tua a raggiungere questo obiettivo.</p>
          <div className='my-m'>
            <Link className='btn-1' href='/contacts' style={{ marginRight: '1.5rem' }}>Contatta</Link>
            <Link className='btn-2' href='/solutions'>Soluzioni</Link>
          </div>
        </div>
      </FadeIn>
      <FadeIn direction='pop'>
        <div className="side-content" style={{ width: '530px' }}>
          <img
              src="/hero-image.png"
              alt="Hero Image"
            />
        </div>
      </FadeIn>

    </TwoColumns>
  );
}