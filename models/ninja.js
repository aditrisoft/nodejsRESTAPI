const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//buat Scbema dan model ninja
const NinjaSchema = new Schema({
  nama: {
    type: String,
    required:[true,'Nama harus diisi']
  },
  nim: {
    type: String
  },
  aktif:{
    type: Boolean,
    default : false
  }
})

const Ninja = mongoose.model('ninjago',NinjaSchema);

module.exports = Ninja;
