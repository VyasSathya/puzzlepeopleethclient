import React, { useState } from 'react'
import './promo.scss'
import promoImg from '../../assets/img/promo-img.png'
import detectEthereumProvider from '@metamask/detect-provider'; 
import Web3 from 'web3';
import PuzzlePeople from '../../abis/ABI.json';

const Promo = ({  }) => {
  // const [isDepositInputShown, setDepositInputShown] = useState(false)
  // const [isMintInputShown, setMintInputShown] = useState(false)
  const [remainingPups, setRemainingPups] = useState('10000')
  // const [sellStatus, setSellStatus] = useState('connect wallet')
  const [sellStatus, setSellStatus] = useState('paused')
  const [depositValue, setDepositValue] = useState(1)
  const [mintValue, setMintValue] = useState(1)
  const address = '0x20C758FfEBB5508512D2e9435674911910D90a46';
  const publicSaleKey = '925429';

  const connectWallet = async () => {
    console.log('calling');
    const provider = await detectEthereumProvider();
    console.log("Provider: ", provider);
    if (provider) {
  
      const web3 = new Web3(provider);
    await provider.enable();
  
    const chainId = await provider.request({ method: 'eth_chainId' });
  
    console.log("Network Connected to: ", chainId);
  
    let currentAccount = null;
  
    currentAccount = await provider
    .request({ method: 'eth_accounts' })
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });

    

    const myAccount = "" + currentAccount[0];
    if (myAccount !== '') {
      //Contract Address
      const abi = PuzzlePeople;
      const MyContract = new web3.eth.Contract( abi, address );
      const tokensLeft = await MyContract.methods.getTokensLeft().call();
      console.log('NFT Left: ', tokensLeft);
      setRemainingPups(tokensLeft);
      
    } else {
      window.alert('Please Connect a MetaMask Account');
    }
    setSellStatus('start')
  }
}

  // const openDepositInput = () => {
  //   setMintInputShown(false)
  //   setDepositInputShown(true)
  // }

  // const openMintInput = () => {
  //   setMintInputShown(true)
  //   setDepositInputShown(false)
  // }

  const mintNfts = async (num) => {

    console.log('calling mint nft');
    const provider = await detectEthereumProvider();
    console.log("Provider: ", provider);
    if (!provider){
      console.log('Please install MetaMask!');
      return; 
    }
    
  
    const web3 = new Web3(provider);
    await provider.enable();
  
    const chainId = await provider.request({ method: 'eth_chainId' });
  
    console.log("Network Connected to: ", chainId);
  
    let currentAccount = null;
  
    currentAccount = await provider
    .request({ method: 'eth_accounts' })
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
    var myAccount = "" + currentAccount[0];

    if (myAccount !== '') {
      //Contract Address
      const abi = PuzzlePeople;
      const MyContract = new web3.eth.Contract( abi, address );
      const tokensLeft = await MyContract.methods.getTokensLeft().call();
      console.log('NFT Left: ', tokensLeft);
      setRemainingPups(tokensLeft);
      console.log( 'Number to buy: ', num );
      // pretomain
      const currPrice = await MyContract.methods.getListMintPrice().call();
      // const currPrice = await MyContract.methods.getPublicSalePrice().call();
      console.log( 'Current price: ', currPrice );
      const requiredAmount = ( currPrice * num ).toString();
      console.log('Amount to be sent: ', requiredAmount);
      // pretomain
      const val = await MyContract.methods.allowListMint( num, publicSaleKey ).send({
      // const val = await MyContract.methods.publicSaleMint( num, publicSaleKey ).send({
        from: myAccount,
        gasPrice: "160000000000",
        value: requiredAmount,
      });
      console.log(val);
    } else {
      window.alert('Please Connect a MetaMask Account');
    }
    
  }
  const decreaseMint = () => {
    if (mintValue > 1) {
      setMintValue(mintValue - 1)
    }
  }
  const increaseMint = () => {
    // pretomain
    // if (mintValue < 20) {
    if (mintValue < 20) {
      setMintValue(mintValue + 1)
    }
  }
  return (
    <section id='promo' className='promo'>
      <div className='container promo__wrapper'>
        <div className='promo__descr wow fadeInDown' data-wow-duration='2s'>
          <h1>
            We are Puzzle  <br />
            <span>People</span>
          </h1>
          <p>
            Puzzle People is a collection of 10,000 people looking for a place to call home. <br />
            <br />
            Public Sale starts Saturday January 22nd @ 7PM EST at 0.03 eth.
            <br /><br />
             </p>
          <div className='promo__descr-btns wow fadeInUp' data-wow-delay='2s'>
            {sellStatus === 'coming soon' && (
              <button className='btn btn_outline btn_disabled'>
                Coming Soon!
              </button>
            )}
            {sellStatus === 'sold out' && (
              <button className='btn btn_outline btn_disabled'>Sold Out</button>
            )}
            {sellStatus === 'paused' && (
              <button className='btn btn_outline btn_disabled'>Paused</button>
            )}
            {sellStatus === 'connect wallet' && (
              <button onClick={connectWallet} className='btn btn_outline btn_disabled'>Connect Wallet</button>
            )}
            {sellStatus === 'start' &&
              (true ? (
                <div className='promo-mint'>
                <div className='promo-mint__input'>
                  <input
                    type='text'
                    value={depositValue}
                    onChange={(e) => setDepositValue(e.target.value)}
                  />
                  <button onClick={decreaseMint} className='btn'>
                    -
                  </button>
                  <p className='promo-mint__input-value'>
                    Mint <span>{mintValue}</span> NFTs
                  </p>
                  <button
                    onClick={increaseMint}
                    className='btn'
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>mintNfts(mintValue)}
                  className='promo-mint__button btn'
                >
                  {/* pretomain */}
                  Mint {(mintValue * 0).toFixed(2)} ETH
                  {/* Mint {(mintValue * 0.03).toFixed(2)} ETH */}
                </button>
                <div className='promo-mint__remain'>
                  <span>{remainingPups}</span>/10000{' '}
                  <span>remaining</span>
                </div>
              </div>
              ) : (
                <button onClick={connectWallet} className='btn btn_outline'>
                  Connect Wallet
                </button>
              ))}
          </div>
        </div>
        <div className='promo__images wow fadeInDown'>
          <img src={promoImg} alt='promo' />
        </div>
      </div>
    </section>
  )
}

export default Promo
