const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 32,
    },
    body:{
        type: String,
        require: true,
        minlength: 2,
        maxlength: 32,
    },
},{versionKey: false});

module.exports = mongoose.model('Post', PostSchema);