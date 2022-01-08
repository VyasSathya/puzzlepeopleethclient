import React, { useEffect, useState } from 'react'
import './facesBlock.scss'
// import facesImg from '../../assets/img/faces.png'
import face1 from '../../assets/img/faces-slider/faces1.png'
import face2 from '../../assets/img/faces-slider/faces2.png'
import face3 from '../../assets/img/faces-slider/faces3.png'
import face4 from '../../assets/img/faces-slider/faces4.png'
import face5 from '../../assets/img/faces-slider/faces5.png'
import face6 from '../../assets/img/faces-slider/faces6.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const FacesBlock = () => {
  const [device, setDevice] = useState('desktop')

  function handleResize() {
    console.log('resize');
    const { innerWidth: width, innerHeight: height } = window;
    console.log(height)
    if(width >= 660){
      setDevice('desktop')
    }else{
      setDevice('mobile')
    }
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

  SwiperCore.use([Autoplay])
  return (
    <section className='faces'>
      <div className='faces__carousel'>
      <Swiper
          loop={true}
          slidesPerView={device === 'mobile'? 1.2 :'auto'}
          spaceBetween={24}
          speed={2000}
          autoplay={{delay:0,disableOnInteraction: false}}
          >
            <SwiperSlide>
              <img src={face1} alt='face1' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={face2} alt='face2' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={face3} alt='face3' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={face4} alt='face4' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={face5} alt='face5' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={face6} alt='face6' />
            </SwiperSlide>
          </Swiper>
      </div>
    </section>
  )
}

export default FacesBlock
