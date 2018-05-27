const express = require('express');
const bodyParser = require('body-parser');

//impor library dari folder routes
const routes = require('./routes/api')

const app = express();

//body parser untuk membaca POST
app.use(bodyParser.json());

//inisialisasi routes
app.use('/api',routes);

//listen dari port 2000
app.listen(process.env.port || 2000,function(){
  console.log("listening sekarang untuk request!");
});
