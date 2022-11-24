import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'Bob da Silva'},
        {id: 2, name: 'Sicrano Costa'},
        {id: 3, name: 'Beltrano Orlando'}
    ];

    if (req.header('Accept') === 'application/json'){
        return res.json({data: users});
    }

    return res.render('users/list', { users })
});

app.listen(3333);