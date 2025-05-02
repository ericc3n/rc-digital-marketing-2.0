import React, { ReactNode } from 'react';
import "./Closure.scss";
import Link from 'next/link';

export default function Closure({ children, cta }: { children: ReactNode, cta: string }) {
  return (
    <div className='section--margin closure'>
      {children}
      <Link href='/contacts' className="btn-1 my-l">{cta}</Link>
    </div>
  )
}
