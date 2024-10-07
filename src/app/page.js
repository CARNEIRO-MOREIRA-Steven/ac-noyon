"use client"
import React, {useEffect} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import FuturEvents from './components/FuturEvents'
import Inscription_intro from './components/Inscription_intro'
import Footer from './components/Footer'

const page = () => {
  useEffect(() => {
    const pingApi = () => {
      fetch('https://ac-noyon-strapi-app.onrender.com/')
        .then(response => {
          if (response.ok) {
            console.log('API est active');
          } else {
            console.error('Erreur lors de l’accès à l’API');
          }
        })
        .catch(error => console.error('Erreur:', error));
    };

    const intervalId = setInterval(pingApi, 800000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section>
      <Header />
      <Banner />
      <FuturEvents />
      <Inscription_intro />
      <Footer />
    </section>
  )
}

export default page
