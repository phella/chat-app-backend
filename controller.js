const models = require('./models');
const messageModel = require('./models/messageModel');
exports.getConversations = (req,res)=>{
    let Conversations = new models({});
    models.find({},{"fromUser":1,"toUser":1,"lastMessage":1,"imagePath":1,"_id":0},{useNewUrlParser:true},(err,data)=>{
        res.json(data);
    });
}

exports.getLastMessages = async (myID,secondID)=>{
    let Conversations = new messageModel({});
    let data2 ;
    await messageModel.find({$or:[{"from":myID,"to":secondID},{"from":secondID,"to":myID}] },{"from":1,"to":1,"message":1,"_id":0},(err,data)=>{
    data2 = data;
    }).limit(20);
    return data2;
}