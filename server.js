const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

require('./server/config/routes')(app); // ROUTES

server.listen(3240, () => {console.log("Listening on port 3240.")});