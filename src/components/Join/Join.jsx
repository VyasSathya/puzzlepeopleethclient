import React from 'react'
import './join.scss'

const Join = () => {
  const scrollToPromo = () => {
    document.querySelector(`#promo`).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='container join'>
      <div className='join__content wow zoomIn'>
        <h2 className='title wow fadeIn' data-wow-delay='0.3s'>
          Join Puzzle People!
        </h2>
        <p className='wow fadeIn' data-wow-delay='0.3s'>
          Become a member today and help us shape our adventure.
        </p>
      </div>
    </section>
  )
}

export default Join
