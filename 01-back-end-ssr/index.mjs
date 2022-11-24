import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'Fulano da Silva'},
        {id: 2, name: 'Sicrano Costa'},
        {id: 3, name: 'Beltrano Orlando'}
    ];

    return res.render('users/list', { users })
});

app.listen(3333);