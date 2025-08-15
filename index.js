const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./mongodb'); 
const mongoose = require('mongoose');

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());


connectDB();


const instaSchema = new mongoose.Schema({
  userid: String,
  password: String
});

const MadeId = mongoose.model('loji', instaSchema);


app.post('/books', async (req, res) => {
  try {
    const newBook = new MadeId(req.body);
    await newBook.save();
    res.status(200).send('You added');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/', (req, res) => {
  res.send('Backend is running!');
});
app.listen(9000, () => {
  console.log(' Server is live on port 9000');
});
