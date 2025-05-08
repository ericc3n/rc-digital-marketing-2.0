import React, { ReactNode } from 'react';
import "./Closure.scss";
import Link from 'next/link';
import { FadeIn } from '@/components/Animation/FadeIn';

export default function Closure({ children, cta }: { children: ReactNode, cta: string }) {
  return (
    <div className='section--margin closure'>
      <FadeIn>
        {children}
      </FadeIn>
      <FadeIn delay={.4}>
        <Link href='/contacts' className="btn-1 my-l">{cta}</Link>
      </FadeIn>
    </div>
  )
}
