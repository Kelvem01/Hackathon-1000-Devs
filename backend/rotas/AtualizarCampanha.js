const express = require('express');

const pool = require('../database/db');

const rotaCampanha = express.Router();

rotaCampanha.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { novo_valor } = req.body;
  
    try {
      const result = await pool.query('UPDATE campanha SET campanhaColuna = $1 WHERE id = $2', [novo_valor, id]);
      res.send(`Registro atualizado com sucesso: ${result.rowCount}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao atualizar o registro');
    }
  });

  module.exports = rotaCampanha
