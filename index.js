const express = require('express')  
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const port =4000;

app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded());
app.use(cors());



mongoose.connect('mongodb+srv://admin:admin@barrel.y8jbfwb.mongodb.net/test').then(()=>{
    console.log('conectado a mongoDB');
    server = app.listen(port, () => {
        console.log(`Escuchando en puerto ${port}`)
    })
})