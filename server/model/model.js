const mongoose = require('mongoose');

var schema = new mongoose.Schema({ //shape and content od data
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    city: String,
    status: String,
    group: String    
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;
