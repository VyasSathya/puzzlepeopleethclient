import React, { useEffect, useState } from 'react'
import Future from './components/Future/Future'
import Roadmap from './components/Roadmap/Roadmap'
import Utility from './components/Utility/Utility'
import Navbar from './components/Navbar/Navbar.jsx'
import Promo from './components/Promo/Promo.jsx'
import FAQs from './components/FAQs/FAQs'
import FacesBlock from './components/FacesBlock/FacesBlock'
import Mingle from './components/Mingle/Mingle'
import Stat from './components/Stat/Stat'
import Join from './components/Join/Join'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'
import { WOW } from 'wowjs'
import { isWalletAddress } from './helpers/helper'

function App() {
  const [userWallet, setUserWallet] = useState(false)

  // const [sellStatus, setSellStatus] = useState('coming soon')
  const [sellStatus, setSellStatus] = useState('connect wallet')
  //const [sellStatus, setSellStatus] = useState('start')
  // const [sellStatus, setSellStatus] = useState('sold out')

  useEffect(() => {
    const wow = new WOW({ live: false })
    wow.init()
    const userWallet = isWalletAddress()
    setUserWallet(userWallet)
  }, [])
  return (
    <>
      <Navbar />
      <Promo
        userWallet={userWallet}
        setUserWallet={setUserWallet}
        sellStatus={sellStatus}
        setSellStatus={setSellStatus}
      />
      <FacesBlock />
      <Mingle />
      <Stat />
      <Utility />
      <Roadmap />
      <Future />
      <FAQs />
      <Team />
      <Join />
      <Footer />
    </>
  )
}

export default App
