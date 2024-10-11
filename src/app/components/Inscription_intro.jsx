import React from 'react'
import './inscription_intro.css'

const Inscription_intro = () => {
  return (
    <section className='inscription_test_container'>
      <section className='inscription_intro_section'>
        <img className='inscription_image_background' src='./compet.jpg'></img>
        <section className='inscription_intro_content'>
        <h2>Les inscriptions 2024-2025 sont ouvertes</h2>
            <ul> <p>Tarif des adhésions de base hors droits d'entrée, maillot, réduction :</p>
                <li>De masters à cadets : 120 €</li>
                <li>De minimes à benjamins : 120 €</li> 
                <li>De poussins à éveils : 120 €</li>
                <li>Baby Athlé : 120 €</li>
                <li><a href='./inscriptions_horaires'>Plus de détails sur les inscriptions</a></li>
            </ul>
        <h3>L'athlétisme dès le plus jeune âge.<br></br>L’AC Noyonnais vous propose de pratiquer l'athlétisme dès 4 ans</h3>
        </section>
        </section>
        <section className='test_seance'>
            <h2 className='seance_gratuite_title'>Une séance gratuite pour vous aider à décider !!</h2>
            <section className='seance_gratuite_content'>
                <p className='seance_gratuite_texte'>Vous voulez vous inscrire à l'AC Noyonnais, mais vous hésitez encore.
                Venez à un cours d'essai dans le créneau de votre choix correspondant à votre âge !
                Venez avec votre short et vos baskets.<br></br>
                Horaires des séances : aux horaires d'entrainement <a href='/inscriptions_horaires#horaires_entrainements' className='lien'>consultable ici.</a></p>
                <img src='/entrainement.jpg' className='seance_gratuite_image'></img>
            </section>
        </section>
    </section>
  )
}

export default Inscription_intro
