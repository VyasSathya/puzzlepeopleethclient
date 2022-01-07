const TokenIds = require('./models/TokenId');
require('dotenv').config()

exports.writeData = async () => {
  // number of tokens to add to the DB
  const numOfTokens = process.env.TOTAL_SUPPLY;

  for (let i = 0; i < numOfTokens; i++) {
    const data = {
      tokenId: i, 
      owner: '',
      purchase: '',
      txHash: '',
      minted: false
    }
  
    await TokenIds.create(data);
  }
  console.log('written')
}
