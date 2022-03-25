const express = require('express');
const bodyParser = require('body-parser');

const Users = require('./models/Users');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/user', async (req, res) => {
  const users = await Users.getUser();

  res.status(200).json(users);
})

app.post('/user', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const isValid = Users.validation(first_name, last_name, email, password);

  if (isValid === true) {
    const userAdd = await Users
      .createUser({ first_name, last_name, email, password });
    return res.status(201).json(userAdd);
  }
  return res.status(400).json(isValid);
});

app.listen(port, () => console.log(`App listening on port ${port}`))
