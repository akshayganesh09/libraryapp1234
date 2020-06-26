const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');


const Schema = mongoose.Schema;

const SignSchema = new Schema({


    user: String,
    email: String,
    pass: String,
    conpass: String,
    number: String

});

var Signdata=mongoose.model('signdata',SignSchema);
module.exports = Signdata;