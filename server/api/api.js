const express = require('express');
const axios = require('axios');
const web3 = require('web3');
const router = express.Router();
const TokenIds = require('../models/TokenId');
const { mint } = require('../controllers/controller');
require('dotenv').config()

const tokenPrice = process.env.TOKEN_PRICE;
/**
 * 
 * 
 * Add your routes for your API endpoints here. Don't forget to add your  controller!  
 */

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getTxDetails = async (txId) => {
  const options = {
    method: 'GET',
    url: `${process.env.API_URI}${txId}`,
    headers: {Accept: 'application/json'}
  };
  
  const response = await axios.request(options);
  return response.data;
}

const allocateRandomTokens = async (numberOfTokens, wallet, txHash) => {
  let randomTokens = [];

  for (let i = 0; i < numberOfTokens; i++) {
    const [randomToken] = await TokenIds.aggregate([
      { $match: { minted: false } },
      { $sample: { size: 1 } }
    ])

    const id = (randomToken.tokenId).toString();
    const bp = randomToken.tokenId + ":" + randomToken.tokenId;

    randomTokens.push({
      "id": id,
      "blueprint": bp
    });

    await TokenIds.findByIdAndUpdate(randomToken._id, {
      owner: wallet,
      purchase: Date.now(),
      txHash: txHash,
      minted: true
    });
  }
  return randomTokens;
}

router.post('/', async (req, res, next) => {
  const { txHash, address, numberOfTokens } = req.body;

  // adding a 2sec timeout to allow transaction to go through
  await timeout(2000);
  
  // check the transaction details and validate them.
  // Checking that transaction was sent by the address from request, receiver is our wallet and that amount matches the expected amount 
  const txDetails = await getTxDetails(txHash);
  const expectedAmount = web3.utils.toWei(String((tokenPrice*numberOfTokens).toFixed(4)));

  if (txDetails.receiver !== (process.env.ROYALTY_RECEIVER_ADDRESS).toLowerCase()
  || txDetails.user !== address
  || txDetails.status !== 'success'
  || txDetails.token.type !== 'ETH'
  || txDetails.token.data.quantity !== expectedAmount) {
    return res.status(401).json({
      success: false,
      message: 'transaction params are wrong'
    })
  }

  // check the hash on existance. If tokenByHash.length > 0, that means that tokens have already been minted for this transaction.
  const tokenByHash = await TokenIds.find({ txHash: txHash });
  if (tokenByHash.length !== 0) {
    return res.status(409).json({
      success: false,
      message: 'transaction already exists'
    })
  }

  // allocates and mint tokens. Pick random tokens from the database and updates its information adding the owner and txHsah parameters
  const tokensToMint = await allocateRandomTokens(numberOfTokens, address, txHash);

  // mints token Ids received in the previous function to the wallet address of the request sender.
  const result = await mint(tokensToMint, address);

  // sends a final responce to the user
  if (result === 'success') {
    return res.status(200).json({
      success: true,
      message: 'Tokens minted',
      numberOfMintedTokens: tokensToMint.length
    })
  } else {
    return res.status(400).json({
      success: false,
      message: 'Tokens not minted, but allocated',
      numberOfMintedTokens: tokensToMint.length
    })
  }
})
 

module.exports = router;