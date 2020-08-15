const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    postId:{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    },
    name: String,
    email: {
        type: String,
    },
    body: {
        type: String,
        required: true,
        minlength: 8,
    }
},{versionKey: false});

module.exports = mongoose.model('Comment', CommentSchema);