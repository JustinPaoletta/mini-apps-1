let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let saveForm = require('./db/dbmodel.js');

const server = express();

server.use(express.static(path.join(__dirname, '/public')));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post('/formData', (req, res) => {
  let form = req.body;
  saveForm.save(form);
  res.status(200).send(req.body);
})

let port = 8888;
let hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server ON at http://${hostname}:${port}/`);
});