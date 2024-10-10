import React from 'react'
import './inscription_horaires.css'

const InscriptionHoraires = () => {
  return (
    <section className="inscription_page">
    <section className='inscription_intro_container'>
      <section className='inscription_content'>
      <h1 className='title_inscription'>Les inscriptions 2024/2025 sont ouvertes !</h1>
      <section className="inscription_info_content">
      <section>
        <img src='licence-2024-2025.png' className="image_ffa"></img>
      </section>
      <section className="inscription_ffa">
        <h2>Inscription FFA</h2>
        <ul>Pièces à joindre :
          <li>Répondre au questionnaire de la FFA</li>
          <li>Une photo d'identité</li>
          <li>Montant de la cotisation, de l'assurance et de la license</li>
        </ul>
      </section>
      </section>
      </section>
      <aside>
        <img src='inscription.jpg' className='inscription_image'></img>
      </aside>
    </section>
    <section className="horaire_info_container">
      <h2>Nos horaires d'entrainements</h2>
      <section className="horaire_info_section">
      <aside>
      <img src="image_horaire.jpg" className="image_horaire"></img>
      </aside>
      <section className="horaire_info_content">
        <aside className="horaire_entrainement">
        <h3>Lundi de 17h30 à 19h30</h3>
        <p>De Benjamins à Masters</p>
        </aside>
        <aside className="horaire_entrainement">
        <h3>Mardi de 17h15 à 18h15</h3>
        <p>De Benjamins à Cadets</p>
        </aside>
        <aside className="horaire_entrainement">      
        <h3>Mercredi de 16h00 à 17h15</h3>
        <p>De Baby à Ecoles d'Athlétisme</p></aside>
        <aside className="horaire_entrainement">
        <h3>Mercredi de 16h00 à 19h30</h3>
        <p>De Poussins, Benjamins à Masters</p>
        </aside>
        <aside className="horaire_entrainement">
        <h3>Vendredi de 17h30 à 19h30</h3>
        <p>De Benjamins à Masters</p>
        </aside>
      </section>
      </section>
    </section>
</section>
  )
}

export default InscriptionHoraires