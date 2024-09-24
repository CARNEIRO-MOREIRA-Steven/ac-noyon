import React from 'react'
import './banner.css'


const Banner = () => {
  return (
    <section className='banner_section'>
        <img className='banner_image' src='./stade_noyon.jpg'></img>
        <section className='banner_content'>
        <h2>Club AC <br></br> Noyonnais</h2>
        <h3>Club d’athlétisme à Noyon. <br></br>
        2 ème en régionale 1 !</h3>
        <aside className='banner_aside_content'>
        <a href='/contact' className='banner_contact_btn'>Nous contacter</a>
        <p>Découvrir le club</p>
        </aside>
        </section>
    </section>
  )
}

export default Banner
