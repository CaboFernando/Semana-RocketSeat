const express = require('express');

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade});
});

app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id});
});



app.listen(3333);