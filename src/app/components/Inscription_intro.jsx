import React from 'react'
import './inscription_intro.css'

const Inscription_intro = () => {
  return (
    <section className='inscription_intro_section'>
        <img className='inscription_image' src='./compet.jpg'></img>
        <section className='inscription_intro_content'>
        <h2>Les inscriptions 2024-2025 sont ouvertes</h2>
            <ul> <p>Tarif des adhésions de base hors droits d'entrée, maillot, réduction :</p>
                <li>De masters à cadets : XX €</li>
                <li>De minimes à benjamins : XX €</li> 
                <li>De poussins à éveils : XX €</li>
                <li>Baby Athlé : XX €</li>
                <li><a href='./inscriptions_horaires'>Plus de détails sur les inscriptions</a></li>
            </ul>
        <h3>L'athlétisme dès le plus jeune âge.<br></br>L’AC Noyonnais vous propose de pratiquer l'athlétisme dès 4 ans</h3>
        </section>
    </section>
  )
}

export default Inscription_intro
