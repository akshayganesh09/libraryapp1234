const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
   author : String,  
   title : String,
   genre : String,
   image : String
});

var Authordata=mongoose.model('authordata', AuthorSchema);
module.exports = Authordata;