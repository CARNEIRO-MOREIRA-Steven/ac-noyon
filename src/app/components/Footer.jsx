import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer_container'>
        <section>
            <h3>AC NOYONNAIS</h3>
            <aside className='footer_aside'>
            <img src='location-dot-solid.svg' className='footer_icon'></img>
            <p>Rue du Chanoine Levasseur,<br></br> 60400 Noyon</p>
            </aside>
        </section>
        <section>
            <h3>A PROPOS</h3>
            <aside className='footer_aside_a_propos'>
            <a href="/">Accueil</a>
            <a href="/le_club">Le club</a>
            <a href="/contact">Contact</a>
            <a href="">Mentions légales</a>
            </aside>
        </section>
        <section>
            <h3>SUIVEZ-NOUS</h3>
            <aside className='footer_aside'>
            <a href='https://www.facebook.com/p/Club-AC-Noyonnais-Officiel-61554512326656/?paipv=0&eav=Afa4w1MSKnIwfhyBLQwz7EmLjlX-BgYu3wINt4-8N-Io5iAC_Fu2eZKqgErPRU-kjLY&_rdr'>
                <img src='facebook-brands-solid.svg' alt='facebook icon' className='footer_icon'></img></a>
            <a href='https://www.instagram.com/ac_noyonnais/'><img src='instagram-brands-solid.svg' alt='facebook icon' className='footer_icon'></img></a>
            <a href='https://g.co/kgs/Bkv3k3q'><img src='google-brands-solid.svg' alt='facebook icon' className='footer_icon'></img></a>
            </aside>
        </section>
    </footer>
  )
}

export default Footer