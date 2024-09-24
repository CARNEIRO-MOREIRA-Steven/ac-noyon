import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import FuturEvents from './components/FuturEvents'
import Inscription_intro from './components/Inscription_intro'

const page = () => {
  return (
    <section>
      <Header />
      <Banner />
      <FuturEvents />
      <Inscription_intro />
    </section>
  )
}

export default page
