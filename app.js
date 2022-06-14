const express = require('express');
const app = express();
const rutas = require('./routes/rutas');
const res = require('express/lib/response');
const path = require('path'); 

app.listen(process.env.PORT || 3030, function () {
    console.log('Servidor corriendo 3030');
});

app.set('view engine', 'ejs'); 
