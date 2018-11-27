const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send({ message: 'Olá mundo, estou funcionando!'})
});

app.get('/novarota', (req, res) =>{
    res.status(200).send({ message: 'Nova rota!'})
});

app.listen(3000, () => {
    console.log('Api executando na porta 3000');
})
