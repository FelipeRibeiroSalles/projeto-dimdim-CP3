const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.static('public'));

app.use(express.json());

app.get('/clientes', async (req, res) => {
  const result = await pool.query('SELECT * FROM clientes');
  res.json(result.rows);
});

app.post('/clientes', async (req, res) => {
  const { nome, email, saldo } = req.body;

  const result = await pool.query(
    'INSERT INTO clientes (nome, email, saldo) VALUES ($1, $2, $3) RETURNING *',
    [nome, email, saldo]
  );

  res.json(result.rows[0]);
});

app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, saldo } = req.body;

  const result = await pool.query(
    'UPDATE clientes SET nome=$1, email=$2, saldo=$3 WHERE id=$4 RETURNING *',
    [nome, email, saldo, id]
  );

  res.json(result.rows[0]);
});

app.delete('/clientes/:id', async (req, res) => {
  const { id } = req.params;

  await pool.query(
    'DELETE FROM clientes WHERE id=$1',
    [id]
  );

  res.send('Cliente removido');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


