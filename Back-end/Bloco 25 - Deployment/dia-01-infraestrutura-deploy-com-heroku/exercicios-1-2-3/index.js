const express = require('express');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.send('Está Vivo!!');
});

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));