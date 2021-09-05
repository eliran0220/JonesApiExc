const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config({path: '.dotenv'});
const orderRouter = require('./routes/router')
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL_CONNECTION, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use("/api/router", orderRouter)

module.exports = app.listen(3000, () => {
    console.log('Server has started...')
})
