const mongoose = require('mongoose');

const TokenIdsSchema = new mongoose.Schema({
  tokenId: {
    type: Number,
    required: true
  },
  owner: {
      type: String,
  },
  purchased: {
      type: Date
  },
  txHash: {
      type: String
  },
  minted: {
    type: Boolean,
    required: true
  }
});


const TokenIds = mongoose.model('TokenIds', TokenIdsSchema);

module.exports = TokenIds;