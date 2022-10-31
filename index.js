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




//git init
//git add README.md
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/Ketienyei/product_list.git
g//it push -u origin main