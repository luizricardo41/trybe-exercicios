const express = require('express');
const bodyParser = require('body-parser');

const Users = require('./models/Users');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/user', async (req, res) => {
  const users = await Users.getUser();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Users.findByID(id);

  if (user.length === 0) return res.status(404).json({
    error: true,
    message: 'Usuário não encontrado'
  });
  return res.status(200).json(user);
});

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

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  const isValid = Users.validation(first_name, last_name, email, password);

  if (isValid === true) {
    const userAdd = await Users
      .updateUser({ id, first_name, last_name, email, password });

    if (userAdd.error) return res.status(404).json(userAdd)
    return res.status(200).json(userAdd);
  }
  return res.status(400).json(isValid);
});

app.listen(port, () => console.log(`App listening on port ${port}`))
