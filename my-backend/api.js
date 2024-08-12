// api.js
const express = require('express');
const client = require('./connection');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

app.listen(3000, () => {
    console.log("Server is now listening at port 3000");
});

client.connect();

app.get('/pluviometros', (req, res) => {
    client.query('SELECT * FROM pluvimetros', (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.log(err);
            res.status(500).send({ error: 'Error al obtener los pluviómetros' });
        }
    });
});

app.get('/alerta/:id', (req, res) => {
    const { id } = req.params;
    client.query('SELECT nivel_alerta FROM alertas_inundacion WHERE pluvimetro_id=$1', [id], (err, result) => {
        if (!err) {
            if (result.rows.length > 0) {
                res.send(result.rows[0]);
            } else {
                res.status(404).send({ error: 'No se encontró alerta para el pluviómetro especificado' });
            }
        } else {
            console.log(err);
            res.status(500).send({ error: 'Error al obtener la alerta' });
        }
    });
});
