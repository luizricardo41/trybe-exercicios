const express = require('express');
const bodyParser = require('body-parser');

const Controller = require('./controller/cepController');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get('/cep/:cep', Controller.receiveCep);

app.listen(PORT, () => console.log('App listening on port: ' + PORT));
