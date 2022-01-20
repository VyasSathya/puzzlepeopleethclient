import React from 'react'
import { useState } from 'react'
import './faqs.scss'

const faqData = [
  {
    id: 1,
    title: 'What is the Total Supply?',
    body: 'A total of 10,000 unique Puzzle People NFTs are created, one piece at a time.',
  },
  {
    id: 2,
    title: 'When will Puzzle People launch?',
    body: 'The mint will be launched on January 22nd, at 7pm EST.',
  },
  {
    id: 3,
    title: 'Why Puzzle People?',
    body: 'When you join the Puzzle People Community, you are joining a 10,000 strong community pieces of the Puzzle family. @V4nimaL  created this project to use art to drive awareness into mental health issues, all while building a great platform for artists and puzzle enthusiasts alike. Come join us Puzzlers!',
  },
  {
    id: 4,
    title: 'What does my Puzzle Person get me?',
    body: 'Minting a Puzzle People NFT gets you a sophisticated, intricately crafted PFP, access to a Community DAO, membership benefits to our merch store, the exclusive right to the artwork and more importantly - the ability to support upcoming artists who might just be the next big thing! This is just the start.',
  },
  {
    id: 5,
    title: 'How to obtain my Puzzle People NFT?',
    body: 'On Jan 7th, our presale will begin for 0.025 ETH. You will have 48 hours to mint. To get on the presale list you must join the discord and follow instructions on 📣︱announcements and 🔑︱presale-access to get get OG access. On Jan 9th, the Mainsale will begin for 0.03 ETH',
  },
  {
    id: 6,
    title: 'How to buy?',
    body: 'Download the metamask.io extension on your browser. Purchase Ethereum from various exchanges, such as Coinbase or Binance (make sure you have additional ETH for the gas fees). Send Ethereum from this exchange to your MetaMask wallet. On launch day, open the Puzzle People this website and select the number of NFTs you wish to mint. Click “MINT” button, Metamask will popup asking for connection. Confirm the transaction and any associated fees. Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea',
  },
  {
    id: 7,
    title: 'Can I get one after mint',
    body: "Yes they will be available after on OpenSea",
  },
]

const FAQs = () => {
  const [activeList, setActiveList] = useState(1)

  const handleExpandList = (id) => {
    if (activeList === id) {
      setActiveList('')
    } else {
      setActiveList(id)
    }
  }

  return (
    <section id='faqs' className='container faqs'>
      <div className='faqs__descr wow fadeInUp'>
        <h2 className='title'>FAQs</h2>
      </div>
      <div className='faqs__list-wrapper'>
        {faqData.map((item) => (
          <div key={item.id} className='faqs__list-item'>
            <div
              className={`faqs__list-header ${
                activeList === item.id ? 'faqs__list-header_active' : ''
              }`}
              onClick={() => handleExpandList(item.id)}
            >
              <h4>{item.title}</h4>
              {activeList === item.id ? (
                <span className='minus'>-</span>
              ) : (
                <span className='plus'>+</span>
              )}
            </div>
            <div
              className={`faqs__list-content  ${
                activeList === item.id ? '' : 'faqs__list-content_hidden'
              }`}
            >
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs
