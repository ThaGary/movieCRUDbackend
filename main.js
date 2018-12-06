const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const queries = require('./queries')
const config = require('./knexfile')
const bodyParser = require('body-parser')
var cors = require('cors')
 
app.use(cors())

app.use(bodyParser.json())

app.listen(port)

app.get('/', (req, res) => {
    queries.getAllMovies().orderBy('id', 'asce')
    .then(movies => res.send(movies))
})

app.get('/:id', (req, res) => {
    queries.getMovieById(req.params.id)
    .then(movie => res.send(movie))
})

app.post('/', (req,res) => {
    queries.addMovie(req.body)
    .then(movie => res.send(movie))
})

app.delete('/:id', (req, res, next) => {
    queries.deleteMovie(req.params.id)
    .then(res.sendStatus(204))
})

app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body)
    .then(updatedMovie => res.json(updatedMovie))
})