import React from 'react'
import './roadmap.scss'
import rm0 from '../../assets/img/roadmap0.png'
import rm10 from '../../assets/img/roadmap10.png'
import rm25 from '../../assets/img/roadmap25.png'
import rm50 from '../../assets/img/roadmap50.png'
import rm75 from '../../assets/img/roadmap75.png'
import rm90 from '../../assets/img/roadmap90.png'
import rm100 from '../../assets/img/roadmap100.png'
import rmAfter from '../../assets/img/roadmapAfter.png'
import { Swiper, SwiperSlide } from 'swiper/react'

const roadmapItems = [
  {
    id: 1,
    title: 'PUZZLE PEOPLE EARLY ACCESS',
    body: 'Join the Puzzle People discord and find out how you can get added to the pre-sale whitelist.',
    percentage: '0%',
    img: rm0,
  },
  {
    id: 2,
    title: 'KEEP CALM AND STAY IN THE SAND',
    body: '50 Annual Calm App Subscriptions giveaway to holders + Sandbox Plot bought on behalf of the community',
    percentage: '10%',
    img: rm10,
  },
  {
    id: 3,
    title: 'WE WANNA VOTE',
    body: 'Establish Puzzle People Community DAO and Launch on Rarity Tools',
    percentage: '25%',
    img: rm25,
  },
  {
    id: 4,
    title: 'PUZZLE PEOPLES GOT TALENT',
    body: '5ETH in Community Pool, Start programs to help upcoming artists showcase talents. Merch Store gets under way',
    percentage: '50%',
    img: rm50,
  },
  {
    id: 5,
    title: 'MENTAL HEALTH',
    body: '10 ETH to Mental Health America, a reputable mental health organization.',
    percentage: '75%',
    img: rm75,
  },
  {
    id: 6,
    title: 'PUZZLED?',
    body: 'Commence Development of Puzzled, a community driven puzzle game',
    percentage: '90%',
    img: rm90,
  },
  {
    id: 7,
    title: 'ITS ABOUT THE COMMUNITY',
    body: '10 ETH will be added to Community DAO and commence development of Sandbox Community Land',
    percentage: '100%',
    img: rm100,
  },
  {
    id: 8,
    title: 'DOESNT END THERE',
    body: 'Sandbox Puzzle Community Development, themed NFT airdrop rewards, partnerships with fine art NFTs, etc.',
    percentage: '',
    img: rmAfter,
  },
]

const Roadmap = () => {
  return (
    <section id='roadmap' className='container roadmap wow fadeIn'>
      <h2 className='title'>Roadmap</h2>
      <p className='roadmap__text'>
        The Puzzle People team thought long and hard about what is important to have a thriving community.
        <br />
        <br />
        Each milestone unlocks when a certain % of Puzzle People have been
        minted.
      </p>
      <div className='roadmap__items-wrapper'>
        {roadmapItems.map((item) => (
          <div className='roadmap__item wow fadeInUp' key={item.id}>
            <div className='roadmap__item-img'>
              <img src={item.img} alt={item.percentage} loading='lazy' />
            </div>
            <div className='roadmap__item-descr'>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
            </div>
            <div className='roadmap__item-percentage'>{item.percentage}</div>
          </div>
        ))}
      </div>

      <div className='roadmap__mobile-slider'>
        <Swiper slidesPerView={1.2} loop={true} spaceBetween={24} speed={500}>
          {roadmapItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='roadmap__item'>
                <div className='roadmap__item-img'>
                  <img src={item.img} alt={item.percentage} loading='lazy' />
                </div>
                <div className='roadmap__item-descr'>
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                </div>
                <div className='roadmap__item-percentage'>
                  {item.percentage}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Roadmap
