const { AlchemyProvider } = require('@ethersproject/providers');
const { Wallet } = require('@ethersproject/wallet');
const { ImmutableXClient } = require( '@imtbl/imx-sdk');
require('dotenv').config()

// setting up the provider
const provider = new AlchemyProvider('ropsten', process.env.ALCHEMY_API_KEY);

exports.mint = async (tokenIds, userAddress) => {
  // creating a signer from the provided private key
  const signer = new Wallet(process.env.MINTER_PRIVATE_KEY).connect(provider);

  // initializing IMX-SDK client
  const client = await ImmutableXClient.build({ 
    // IMX's API URL
    publicApiUrl: 'https://api.ropsten.x.immutable.com/v1',
    // signer (in this case, whoever owns the contract)
    signer,
    // IMX's Ropsten STARK contract address
    starkContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    // IMX's Ropsten Registration contract address
    registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
  });

  // this is the mintv2 (which will replace the client.mint in the near future!)
  // it allows you to add protocol-level royalties to the token
  // also, compared to mint(v1) where you batch minted tokens of different types to the same user
  // mintv2 batch mints token of the same type to multiple users (which makes sense, 
  // considering you have to sign/be the owner of the token)
  try {
    const result = await client.mintV2([
      {
          "contractAddress": (process.env.TOKEN_CONTRACT_ADDRESS).toLowerCase(),
          // top-level "global" royalties that apply to this entire call
          // unless overriden on a token-by-token basis in the below array
          "royalties": [
              // you can have multiple recipients!
              {
                  // address of the recepient of royalties
                  "recipient": (process.env.ROYALTY_RECEIVER_ADDRESS).toLowerCase(),
                  "percentage": 5.5
              }
          ],
          // list of users that will receive token defined by the contract at the given address
          "users": [
              {
                  // address of the (IMX registered!) user we want to mint this token to
                  // received as the first argument in mintFor() inside your L1 contract
                  "etherKey": userAddress.toLowerCase(),
                  // list of tokens to be minted to the above address
                  "tokens": tokenIds,                           
                  
              }
          ]
      }
    ])
    console.log(result);
    return 'success';
  } catch(err) {
    console.log('Minting failed with the following', err);
    return 'error';
  }
}