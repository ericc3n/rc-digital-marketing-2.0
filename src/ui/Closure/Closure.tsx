import React, { ReactNode } from 'react';
import "./Closure.scss";
import Link from 'next/link';

export default function Closure({ children }: { children: ReactNode }) {
  return (
    <div className='section--margin closure'>
      {children}
      <Link href='/contacts' className="btn-1 my-l">Inizia il tuo percorso</Link>
    </div>
  )
}
