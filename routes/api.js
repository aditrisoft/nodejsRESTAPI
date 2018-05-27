const express = require('express');
const router = express.Router();

//GET --> untuk membaca data
router.get('/ninja', function(request, response){
  response.send({type:'GET'});
});

//POST --> untuk input data
router.get('/ninja', function(request, response){
  response.send({type:'POST'});
});

//PUT --> untuk update data
router.put('/ninja/:id', function(request, response){
  response.send({type:'PUT'});
});

//DELETE --> untuk hapus data
router.delete('/ninja/:id', function(request, response){
  response.send({type:'DELETE'});
});


module.exports = router;
