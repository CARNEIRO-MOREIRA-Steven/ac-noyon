import React from 'react'
import './le_club_banner.css'

const LeClubBanner = () => {
  return (
    <section>
        <section className='banner_le_club_section'>
            <img className='image_banner_le_club' alt='image du stade' src='./stade_club.jpg'></img>
            <section className='banner_le_club_content'>
              <h1>Bienvenue à l'AC Noyonnais</h1>
              <h2>Club d’athlétisme à Noyon.<br></br>
              Dans l'Oise</h2>
            </section>
            <section className='banner_le_club_evenement'>
              <img alt='image evenement enfant' className='banner_le_club_image_event' src='./enfant_evenement.jpg'></img>
              <h3 className='banner_le_club_evenement_title'><a href='/evenements'>Nos derniers evénements</a></h3>
            </section>
        </section>
    </section>
  )
}

export default LeClubBanner