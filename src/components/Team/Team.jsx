import React from 'react'
import './team.scss'
import pete from '../../assets/img/t-pete.png'
import nakajta from '../../assets/img/t-nakajta.png'
import wilzor from '../../assets/img/t-wilzor.png'
import fuego from '../../assets/img/t-fuego.png'
import azard from '../../assets/img/t-azard.png'
import tapz from '../../assets/img/t-tapz.png'
import { Swiper, SwiperSlide } from 'swiper/react';

const Team = () => {
  return (
    <section id='team' className='container team'>
      <div className='team__descr wow fadeInUp'>
        <h2 className='title'>The team</h2>
        <p>
          
        </p>
      </div>
      <div className='team__members-wrapper'>
        <figure className='team__member'>
          <img src={pete} alt='pete' loading='lazy' />
          <figcaption>
            <h4>V4nimaL (Vyas)</h4>
            <p>Art and Code</p>
          </figcaption>
        </figure>
        <figure className='team__member'>
          <img src={nakajta} alt='nakajta' loading='lazy' />
          <figcaption>
            <h4>SaintJPow (Suraj)</h4>
            <p>Discord Management</p>
          </figcaption>
        </figure>
        <figure className='team__member'>
          <img src={wilzor} alt='wilzor' loading='lazy' />
          <figcaption>
            <h4>DanGoodmanX (Dan)</h4>
            <p>Game Developer</p>
          </figcaption>
        </figure>
        <figure className='team__member'>
          <img src={fuego} alt='fuego' loading='lazy' />
          <figcaption>
            <h4>Octoberman (Jonny)</h4>
            <p>Media</p>
          </figcaption>
        </figure>
        <figure className='team__member'>
          <img src={azard} alt='azard' loading='lazy' />
          <figcaption>
            <h4>Camron (Camron)</h4>
            <p>Mod manager</p>
          </figcaption>
        </figure>
        <figure className='team__member'>
          <img src={tapz} alt='tapz' loading='lazy' />
          <figcaption>
            <h4>Mdpvs_98 (Maria)</h4>
            <p>Discord Management</p>
          </figcaption>
        </figure>
      </div>

      <div className='team__mobile-slider'>
      <Swiper
          slidesPerView={1.2}
          centeredSlides={true} 
          loop={true}
          speed={500}
          >
            <SwiperSlide>
            <figure className='team__member'>
            <img src={pete} alt='pete' loading='lazy' />
            <figcaption>
              <h4>V4nimaL</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='team__member'>
            <img src={nakajta} alt='nakajta' loading='lazy' />
            <figcaption>
              <h4>Nakajta</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='team__member'>
            <img src={wilzor} alt='wilzor' loading='lazy' />
            <figcaption>
              <h4>Wilzor</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='team__member'>
            <img src={fuego} alt='fuego' loading='lazy' />
            <figcaption>
              <h4>Fuego NFT</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='team__member'>
            <img src={azard} alt='azard' loading='lazy' />
            <figcaption>
              <h4>Azard</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
            <SwiperSlide>
            <figure className='team__member'>
            <img src={tapz} alt='tapz' loading='lazy' />
            <figcaption>
              <h4>TapzHQ</h4>
              <p>The ideas and the art</p>
            </figcaption>
          </figure>
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  )
}

export default Team
