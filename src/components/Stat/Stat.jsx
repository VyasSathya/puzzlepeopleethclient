import React from 'react'
import './stat.scss'
import woodImg from '../../assets/img/stat-wood.png'

const Stat = () => {
  return (
    <section id='stat' className='stat'>
      <div className='container stat__wrapper wow fadeInUp'>
        <div className='stat__wood'>
          <img src={woodImg} alt='wood' />
        </div>
        <div className='stat__signs'>
          <div className='stat__single-sign stat__single-sign_s1'>
            <h4>10,000</h4>
            <p>Unique art pieces themed from puzzles</p>
          </div>
          <div className='stat__single-sign stat__single-sign_s2'>
            <h4>200</h4>
            <p>NFTs being withheld from the sale for giveaways</p>
          </div>
          <div className='stat__single-sign stat__single-sign_s3'>
            <h4>120+</h4>
            <p>Individual Traits</p>
          </div>
          <div className='stat__single-sign stat__single-sign_s4'>
            <h4>11</h4>
            <p>Features</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stat
