import React from 'react'
import Header from '../components/Header'
import LeClubBanner from '../components/LeClubBanner'
import LeClubIntro from '../components/LeClubIntro'

import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <LeClubBanner />
      <LeClubIntro />

      <Footer />
    </div>
  )
}

export default page
