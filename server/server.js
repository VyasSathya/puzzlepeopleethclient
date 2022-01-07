const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')
// const { writeData } = require('./writeDB');
const api = require('./api/api');

require('dotenv').config()

const app = express();

//Set Up the Assets Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());


// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    
  )
  .then(() => console.log('MongoDB Connected'))
  // .then(() => writeData()) // comment after one launch
  .catch(err => console.log(err));

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/mint', api);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));