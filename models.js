const Mongoose = require("mongoose");


const userModel = Mongoose.model("Conversations",//Schema 
{
    "fromUser":String,
    "toUser":String,
    "lastMessage":String,
});

module.exports = userModel;