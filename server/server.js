//Get dependencies

const express = require('express');
const http = require('http');
const app = express();
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const request=require('request');
const nodeGoogleplaces = require("node-googleplaces");
const places = new nodeGoogleplaces('AIzaSyB4GAtTvQUikqO1nBfXMF2YTYPIKj3yfE4');
const api = require('./api.js')(app,bodyParser,http,request,nodeGoogleplaces,places);
//const path = require('path');

const port = process.env.PORT || '4200';
app.set('port', port);

//create a HTTP server
const server = http.createServer(app);

// listen on provided port
server.listen(port, () => console.log(`node server is up on `+port));
