import React from 'react';
import styles from './Logo.module.scss';

export default function Logo({ noColor = false }: { noColor?: boolean }) {
  return (
    <div className={styles.logo} style={ noColor ? { filter: 'saturate(0)' } : undefined }>
      <span className={styles.bold}>RC </span>
      <span className={styles.normal}>Digital</span>
      <span className={styles.bold}> Marketing</span>
    </div>
  )
}
