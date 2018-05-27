const express = require('express');

//impor library dari folder routes
const routes = require('./routes/api')

const app = express();

//inisialisasi routes
app.use('/api',routes);

//listen dari port 2000
app.listen(process.env.port || 2000,function(){
  console.log("listening sekarang untuk request!");
});
