const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());

db.on('open', () => {
  console.log('DB Connected!');
  app.listen(PORT, () => console.log('Server is listening on port ${PORT}'));
});

