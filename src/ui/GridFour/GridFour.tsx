import React, { ReactNode } from 'react';
import styles from './GridFour.module.scss';

export default function GridFour({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`${styles.gridLayout} ${className}`}>
      {children}
    </div>
  )
}
