"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    date:     {type: Date},
    content:  {type: String},
    username: {type: String}
}, {
    versionKey: false,
    collation: "MessageCollection"
});

module.exports = mongoose.model('MessageModel', MessageSchema);


