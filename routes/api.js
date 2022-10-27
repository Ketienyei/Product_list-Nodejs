const express = require('express')
const routes = express.Router();


//list of products from the database
routes.post('/product', (req ,res) =>{
    res.send('Here are our products')
})