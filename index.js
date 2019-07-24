const cors = require('cors');
const Mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');
const app = express();






 
Mongoose.connect("mongodb://localhost:27017/Chat-app",{useNewUrlParser:true});
const db = Mongoose.connection;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


