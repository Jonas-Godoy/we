const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
   res.send('ola')
})

app.get('/user-list', (req, res) => {
    res.send(userList)
})

app.get('/settings', (req, res) => {
    res.send('Your settings')
} )

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))

const usuarios = require('./userList');
console.log(usuarios);

const filmes = require('./movieList');
console.log(filmes);

const paises = require('./countriesList');
console.log(paises);

