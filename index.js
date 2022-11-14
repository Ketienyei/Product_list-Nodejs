const express = require('express');
const app = express()
const routes = require ('./routes/api');
const mongoose = require ('mongoose');

app.use(routes);

mongoose.connect('mongodb://localhost/customerdb',() =>
 console.log('succesfull connected to db'));
 
 

app.listen(process.env.port || 4000, ()=>{
    console.log(`Server up and running: http://localhost:4000`);
});




