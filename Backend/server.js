const express = require('express');
const cors = require("cors")
const connectToDB = require('./src/db/db');

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome to the E-commerce API')
})




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})