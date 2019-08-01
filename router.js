const controller = require("./controller");

const express = require('express');
const app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  socket.on('open chat', (data) => {
     const messages = controller.getLastMessages(data.myID,data.secondID);
     socket.emit('last messages',messages);
  }); 
  console.log('user connected');
});




server.listen(port,'127.0.0.1', () => {
  console.log(`started on port: ${port}`);
});


app.get('/inboxList',(req,res)=>{  
  controller.getConversations(req,res);
  //res.writeHead(200,{'Content-Type':'btngan'})
});


