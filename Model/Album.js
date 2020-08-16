const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    userId:{
        //type: mongoose.Types.ObjectId,
        //ref: 'User',
    },
    title:{
        type: String,
        minlength: 3,
    }
});

module.exports = mongoose.model('Album', AlbumSchema);