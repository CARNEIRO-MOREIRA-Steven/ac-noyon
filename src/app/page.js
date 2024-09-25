import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import FuturEvents from './components/FuturEvents'
import Inscription_intro from './components/Inscription_intro'
import Footer from './components/Footer'

const page = () => {
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
