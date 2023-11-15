const express = require('express');
const app = express();
var path = require ('path');
app.use(express.static(path.join(__dirname+ 'public')));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./route'));

app.listen(3000, ()=>{
    console.log('Servidor está corriendo en http://localhost:3000');
});