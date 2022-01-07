import React from 'react'
import './utility.scss'
import untilityImg from '../../assets/img/utility-face.png'

const Utility = () => {
  return (
    <section className='utility'>
      <div className='container utility__wrapper'>
        <div className='utility__descr wow fadeInUp'>
          <h3 className='subtitle'>Our #1 priority</h3>
          <h2 className='title'>COMMUNITY AND OPPORTUNITY</h2>
          <p>
            <br />
            Help promote artists and create a community that provides opportunities and showcase talented members.
            <br />
          </p>
        </div>
        <div className='utility__img wow rotateInDownRight'>
          <img src={untilityImg} alt='face' loading='lazy' />
        </div>
      </div>
    </section>
  )
}

export default Utility
