import React from 'react'
import './mingle.scss'
import mingleImg from '../../assets/img/mingle-face.png'

const Mingle = () => {
  return (
    <section id='mingle' className='mingle'>
      <div className='container mingle__wrapper'>
        <div className='mingle__img wow rotateInDownLeft'>
          <img src={mingleImg} alt='img' />
        </div>
        <div className='mingle__descr wow fadeInUp'>
          <h3 className='subtitle'>Puzzle People Priorities</h3>
          <h2 className='title'>What we stand for</h2>
          <p>
            Carefully handcrafted over four months, each puzzle piece NFT
            stays true to the idea of making fine art accessible and affordable, 
            delighting the puzzle enthusiast and contributing to charities 
            dedicated towards improving lives of those affected by mental illness.
            <br />

          </p>
        </div>
      </div>
    </section>
  )
}

export default Mingle
