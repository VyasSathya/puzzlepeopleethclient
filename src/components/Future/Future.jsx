import React from 'react'
import './future.scss'
import wheatImg from '../../assets/img/wheat-single.png'

const Future = () => {
  return (
    <section className='future'>
      <div className='container future__wrapper'>
        <div className='future__cards-wrapper'>
          <div className='future__cards-column'>
            <div className='future__card wow jackInTheBox'>
              <img src={wheatImg} alt='wheat' />
              <h5>Art</h5>
              <p>Community Art Support</p>
            </div>
            <div
              className='future__card wow jackInTheBox'
              data-wow-delay='0.4s'
            >
              <img src={wheatImg} alt='wheat' />
              <h5>Metaverse</h5>
              <p>Puzzles on other platforms</p>
            </div>
          </div>

          <div className='future__cards-column future__cards-column_offset'>
            <div
              className='future__card wow jackInTheBox'
              data-wow-delay='0.2s'
            >
              <img src={wheatImg} alt='wheat' />
              <h5>Rewards</h5>
              <p>Cool Puzzle Themed Airdrops</p>
            </div>
            <div
              className='future__card wow jackInTheBox'
              data-wow-delay='0.6s'
            >
              <img src={wheatImg} alt='wheat' />
              <h5>Health</h5>
              <p>Give to charity and foster a good community</p>
            </div>
          </div>
        </div>

        <div className='future__descr wow fadeInUp'>
          <h3 className='subtitle'>Whats's next?</h3>
          <h2 className='title'>Future of Puzzle People</h2>
          <p>
            Community Puzzles
            <br />
            <br />
            A Community Puzzle game that gives rewards when members work together and solve it. 
            <br />
            <br />
            Sandbox and other metaverse integrations
          </p>
        </div>
      </div>
    </section>
  )
}

export default Future
