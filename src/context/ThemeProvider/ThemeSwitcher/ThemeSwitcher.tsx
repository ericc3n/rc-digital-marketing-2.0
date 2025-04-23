'use client';

import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import './ThemeSwitcher.scss';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Hydration missmatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return (
    <button 
      className='theme-switcher' 
      style={{ visibility: 'hidden' }}
    >
      <span className='icon'><MdDarkMode /></span>
    </button>
  );

  return (
    <button 
      className='theme-switcher' 
      onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark'); console.log('clicked')}}
    >
      <span className='icon'>{theme === 'dark' ? <MdDarkMode /> : <MdLightMode />}</span>
    </button>
  );
}
