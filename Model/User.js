const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required : true,
        minlength: 3,
    },
    username: {
        type: String,
        required : true,
        minlength: 3,
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    website: {
        type: String,
    },
    firebaseId:{
        
    },
    roleId:{
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId('5f50e3ffe8a596717fd3e260'),
        ref: 'Role',
    }
},{versionKey: false});

module.exports= mongoose.model('User', UserSchema);