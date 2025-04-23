'use client';

import React from 'react';
import './Navbar.scss';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import ThemeSwitcher from '../../context/ThemeProvider/ThemeSwitcher/ThemeSwitcher';

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <ul className="link-pages">
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/solutions'>Soluzioni</Link></li>
        <li><Link href='/contacts'>Contatti</Link></li>
      </ul>
      <ThemeSwitcher />
    </nav>
  )
}
