const Mongoose = require("mongoose");


const messageModel = Mongoose.model("messages",//Schema 
{
    "from":String,
    "to":String,
    "message":String,
    "messageTime":Date,
    "imagePath":Array
});

module.exports = messageModel;