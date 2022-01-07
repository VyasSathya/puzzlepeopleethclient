// default libraries that make all of this possible
import { ImmutableXClient, Link } from '@imtbl/imx-sdk'
import { ERC721TokenType, ETHTokenType } from '@imtbl/imx-sdk'
import { AlchemyProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { ethers } from 'ethers'
import web3 from 'web3'
import axios from 'axios'

// const linkAddress = 'https://link.x.immutable.com';
// const apiAddress = 'https://api.x.immutable.com/v1';

const linkAddress = 'https://link.ropsten.x.immutable.com'
const apiAddress = 'https://api.ropsten.x.immutable.com/v1'
// Link SDK
const link = new Link(linkAddress)
const price = process.env.REACT_APP_PRICE

const auth = async (address) => {
  let signature = await web3.eth.personal.sign(
    web3.utils.fromUtf8('IMX'),
    address,
    ''
  )
  localStorage.setItem('SIGNATURE', signature)
  return signature
}

export const IMXSetUp = async () => {
  console.log('In IMXSetUp')
  try {
    const { address, starkPublicKey } = await link.setup({})
    localStorage.setItem('WALLET_ADDRESS', address)
    localStorage.setItem('STARK_PUBLIC_KEY', starkPublicKey)
    return true
  } catch {
    console.log('error setting up')
    return false
  }
}

export const depositFor = async (num) => {
  console.log('In Deposit')
  var val = num * price
  var valStr = val.toString()

  console.log('Link Obj: ', link)

  // Deposit ETH into IMX
  try {
    const depo = await link.deposit({
      type: ETHTokenType.ETH,
      amount: valStr,
    })
  } catch {
    console.log('Error Depositing')
  }
}

export const mintNftTokens = async (num, address) => {
  const amount = (price * num).toFixed(4)

  const transferResponsePayload = await link.transfer([
    {
      amount: amount,
      type: ETHTokenType.ETH,
      toAddress: process.env.REACT_APP_DEPOSIT_ADDRESS.toLowerCase(),
    },
  ])
  console.log(transferResponsePayload)
  if (transferResponsePayload.result[0].status === 'success') {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/mint`,
      data: {
        address,
        numberOfTokens: num,
        txHash: transferResponsePayload.result[0].txId,
      },
    })
      .then((resp) => {
        console.log(resp.data)
        return 'mint success'
      })
      .catch((err) => {
        console.error(err)
        return 'mint error'
      })
  } else {
    return 'transfer error'
  }
}
