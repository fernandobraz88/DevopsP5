const express = require('express');
const app = express();

// Obtém variáveis de ambiente
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'default_db';

app.get('/', (req, res) => {
  res.send(`Aplicação rodando na porta ${PORT} e usando o banco de dados ${DB_NAME}.`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
