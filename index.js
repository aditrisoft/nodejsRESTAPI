const express = require('express');

const app = express();

//fungsi GET
app.get('/',function(request,response){
  console.log('GET request');
  response.send({nama : 'adi hermawan'});
});

//listen dari port 2000
app.listen(process.env.port || 2000,function(){
  console.log("listening sekarang untuk request!");
});
