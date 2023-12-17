const express = require('express');
const bodyParser = require('body-parser');
const { fetchNames, addName } = require('./namesController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rota para obter a lista de nomes
app.get('/api/names', fetchNames);

// Rota para adicionar um nome à lista
app.post('/api/names', addName);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
