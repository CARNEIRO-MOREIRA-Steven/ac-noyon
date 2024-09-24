import React from 'react'
import './header.css';

const Header = () => {
  return (
    <header className='header_section'>
      <img className='logo_banner' alt='logo_club' src='./logo_b.png'></img>
      <nav className='nav_header'>
      <a href="/">Accueil</a>
      <a href="/le_club">Le Club</a>
      <a href="/evenements">Evénements</a>
      <a href="/inscriptions_horaires">Inscriptions / Horaires</a>
      <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header
