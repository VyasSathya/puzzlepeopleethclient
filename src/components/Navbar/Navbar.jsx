import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../assets/icons/logo.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import discordIcon from '../../assets/icons/discord.svg'
import hamburger from '../../assets/icons/hamburger-button.svg'

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false)

  const executeScroll = (block) => {
    const anchor = document.querySelector(`#${block}`)
    anchor.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuVisible(false)
  }

  return (
    <header className='container navbar'>
      <button
        className='navbar__hamburger'
        onClick={() => {
          setIsMobileMenuVisible(true)
        }}
      >
        <img src={hamburger} alt='menu' />
      </button>
      <a href='/' className='navbar__logo wow fadeInLeft'>
        <img src={logo} alt='logo' />
      </a>
      <nav className='navbar__menu wow fadeIn' data-wow-delay='0.5s'>
        <ul className='navbar__item-wrapper'>
          <li
            onClick={() => {
              executeScroll('promo')
            }}
          >
            The Club
          </li>
          <li
            onClick={() => {
              executeScroll('mingle')
            }}
          >
            Community
          </li>
          <li
            onClick={() => {
              executeScroll('stat')
            }}
          >
            Spec
          </li>
          <li
            onClick={() => {
              executeScroll('roadmap')
            }}
          >
            Roadmap
          </li>
          <li
            onClick={() => {
              executeScroll('faqs')
            }}
          >
            FAQs
          </li>
          <li
            onClick={() => {
              executeScroll('team')
            }}
          >
            Team
          </li>
        </ul>
      </nav>
      <div className='navbar__social wow fadeInRight' data-wow-delay='0.8s'>
        <a href='https://twitter.com/PuzzlePeopleNFT'>
          <img src={twitterIcon} alt='twitter' />
        </a>
        <a href='https://opensea.io/collection/puzzlepeoplenft'>
          <img src={discordIcon} alt='discord' />
        </a>
      </div>

      {/* Mobile menu */}
      <nav
        className={`navbar__mobile-menu ${
          isMobileMenuVisible ? '' : 'navbar__mobile-menu_hidden'
        }`}
      >
        <button
          className='navbar__mobile-menu-close'
          onClick={() => setIsMobileMenuVisible(false)}
        >
          &times;
        </button>
        <ul className='navbar__item-wrapper'>
          <li
            onClick={() => {
              executeScroll('promo')
            }}
          >
            The Club
          </li>
          <li
            onClick={() => {
              executeScroll('mingle')
            }}
          >
            Community
          </li>
          <li
            onClick={() => {
              executeScroll('stat')
            }}
          >
            Spec
          </li>
          <li
            onClick={() => {
              executeScroll('roadmap')
            }}
          >
            Roadmap
          </li>
          <li
            onClick={() => {
              executeScroll('faqs')
            }}
          >
            FAQs
          </li>
          <li
            onClick={() => {
              executeScroll('team')
            }}
          >
            Team
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
