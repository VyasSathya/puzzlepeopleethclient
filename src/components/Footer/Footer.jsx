import React from 'react'
import './footer.scss'
import logo from '../../assets/icons/logo.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='/' className='footer__logo'>
        <img src={logo} alt='logo' />
      </a>
      <div className='footer__contact'>
        <span>
          Verified smart contract address will be shared when we launch
        </span>
      </div>
    </footer>
  )
}

export default Footer
