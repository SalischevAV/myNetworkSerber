const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    role:{
        type: String,
        required: true,
    }
},{versionKey: false});

module.exports = mongoose.model('Role', RoleSchema);