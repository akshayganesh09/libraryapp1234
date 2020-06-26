const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');


const Schema = mongoose.Schema;

const LoginSchema = new Schema({


    user: String,
  
    pass: String,
  
});

var Logindata=mongoose.model('logindata',LoginSchema);
module.exports = Logindata;