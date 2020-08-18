const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        //type: String,
        //required : true,
        //minlength: 3,
    },
    username: {
        //type: String,
        //required : true,
        //minlength: 3,
    },
    email: {
        //type: String,
    },
    phone: {
        //type: String
    },
    website: {
        //type: String,
    },
    firebaseId:{

    },
},{versionKey: false});

module.exports= mongoose.model('User', UserSchema);