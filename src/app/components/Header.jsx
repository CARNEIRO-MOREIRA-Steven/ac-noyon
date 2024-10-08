"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePath(window.location.pathname);
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushState', handleRouteChange);
    window.addEventListener('replaceState', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushState', handleRouteChange);
      window.removeEventListener('replaceState', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <header className='header_section'>
      <a href='/'><img className='logo_banner' alt='logo_club' src='./logo_b.png'></img></a>
      <nav className="desktop-nav">
        <Link href='/' className={activePath === '/' ? 'active' : ''}>Accueil</Link>
        <Link href='/le_club' className={activePath === '/le_club' ? 'active' : ''}>Le Club</Link>
        <Link href='/evenements' className={activePath === '/evenements' ? 'active' : ''}>Evénements</Link>
        <Link href='/inscriptions_horaires' className={activePath === '/inscriptions_horaires' ? 'active' : ''}>Inscriptions / Horaires</Link>
        <Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link>
        <a href="https://ac-noyon-strapi-app.onrender.com/"><img className="connect_user" src='user-regular.svg'></img></a>
      </nav>
      <div className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu" className={isMenuOpen ? 'open' : ''}>
            <li><Link href='/' className={activePath === '/' ? 'active' : ''}>Accueil</Link></li>
            <li><Link href='/le_club' className={activePath === '/le_club' ? 'active' : ''}>Le Club</Link></li>
            <li><Link href='/evenements' className={activePath === '/evenements' ? 'active' : ''}>Evénements</Link></li>
            <li><Link href='/inscriptions_horaires' className={activePath === '/inscriptions_horaires' ? 'active' : ''}>Inscriptions / Horaires</Link></li>
            <li><Link href='/contact' className={activePath === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </div>
        <a href="https://ac-noyon-strapi-app.onrender.com/"><img className="connect_user" src='user-regular.svg'></img></a>
      </div>
    </header>
  );
};

export default Header;
