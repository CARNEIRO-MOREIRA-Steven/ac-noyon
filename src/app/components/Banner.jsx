import React from 'react'
import './banner.css'


const Banner = () => {
  return (
    <section className='banner_section'>
        <img className='banner_image' src='./stade_noyon.jpg'></img>
        <section className='banner_content'>
        <h1>Club AC <br></br> Noyonnais</h1>
        <h2>Club d’athlétisme à Noyon. <br></br>
        2 ème en régionale 1 !</h2>
        <aside className='banner_aside_content'>
        <a href='/contact' className='banner_contact_btn'>Nous contacter</a>
        <a href='/le_club' className='banner_club_btn'>Découvrir le club</a>
        </aside>
        </section>
    </section>
  )
}

export default Banner
