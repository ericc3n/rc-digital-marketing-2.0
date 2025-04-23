'use client';

import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import ThemeSwitcher from '../../context/ThemeProvider/ThemeSwitcher/ThemeSwitcher';
import { MdClose, MdMenu } from 'react-icons/md';
import useResize from '@/hooks/useResize';

const TABLET_SCREEN = 1080;

const MenuIcon = ({ menuOpen } : { menuOpen: boolean}): React.JSX.Element => {
  const Icon = menuOpen ? MdClose : MdMenu;
  return <Icon style={{ verticalAlign: 'middle' }} />
}

export default function Navbar() {
  const [isTablet, setIsTablet] = useState<boolean>(false); 
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false); 

  // Resize navbar
  useResize(TABLET_SCREEN, setIsTablet);
  useEffect(() => {
    setIsTablet(window.innerWidth < TABLET_SCREEN);
  }, []);

  // Disable Body
  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = '';
    }
  
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpened]);

  return (
    <nav>
      <Logo />
      <div className="nav-container">
        {isTablet && (
          <span 
            className='drop-menu-button'
            onClick={() => setIsMenuOpened(prevState => !prevState)}
            ><MenuIcon menuOpen={isMenuOpened} />
          </span>
        )}
        <ul className={`link-pages ${isMenuOpened ? 'show' : 'hide'}`}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/solutions'>Soluzioni</Link></li>
          <li><Link href='/contacts'>Contatti</Link></li>
          {isTablet && (
            <li><ThemeSwitcher /></li>
          )}
        </ul>
      </div>
      {!isTablet && (
        <ThemeSwitcher />
      )}
    </nav>
  )
}
