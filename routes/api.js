const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//GET --> untuk membaca data
router.get('/ninjas', function(request, response, next){
  Ninja.find({}).then(function(tai){
    response.send(tai);
  });
});

//GET --> untuk membaca data detail
router.get('/ninja/:id', function(request, response, next){
  Ninja.find({_id : request.params.id}).then(function(tai){
    response.send(tai);
  });
});

//POST --> untuk input data
router.post('/ninja', function(request, response, next){
  console.log(request.body);
  Ninja.create(request.body).then(function(ninjago){
    console.log(ninjago);
    response.send(ninjago);
  }).catch(next);
});

//PUT --> untuk update data
router.put('/ninja/:id', function(request, response, next){
  Ninja.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(ninja){
    Ninja.findOne({_id: request.params.id}).then(function(ninja){
      response.send(ninja);
    });
  });
});

//DELETE --> untuk hapus data
router.delete('/ninja/:id', function(request, response, next){
  Ninja.findByIdAndRemove({_id: request.params.id}).then(function(ninja){
    response.send(ninja);
  });
});


module.exports = router;
