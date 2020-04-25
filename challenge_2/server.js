let express = require('express');
let bodyParser = require('body-parser');

const server = express();

server.use(express.static(__dirname + '/client'));

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());

server.post('/csv', (req, res) => {
  console.log(req.body.text);
  res.status(200).send(JSON.stringify(req.body.text));
});



server.listen(9000, () => {console.log('Im on 9000 come at me')});