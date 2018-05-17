//IMPORTING EXPRESS
const express = require('express');
//INSTANTIATING EXPRESS
const app = express();
//SETTING UP THE TEMPLATE ENGINE
app.set('view engine', 'pug')
//SETTING UP THE LOCALHOST LISTENER
app.listen(3000);
//ROUTES
app.get('/',(req,res)=>{
    res.render('index');
});