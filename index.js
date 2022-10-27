const express = require('express');
const app = express()






app.listen(process.env.port || 4000, ()=>{
    console.log(`Server up and running: http://localhost:4000`);
});