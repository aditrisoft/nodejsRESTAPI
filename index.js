const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//impor library dari folder routes
const routes = require('./routes/api');

const app = express();

//connect ke mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//body parser untuk membaca POST
app.use(bodyParser.json());

//inisialisasi routes
app.use('/api',routes);

//handling error dengan middleware
app.use(function(err,request,response,next){
//  console.log(err);
  response.status(422).send({error: err.message});
});

//listen dari port 2000
app.listen(process.env.port || 2000,function(){
  console.log("listening sekarang untuk request!");
});
