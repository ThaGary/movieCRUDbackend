const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')
 
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.getAllMovies().orderBy('id', 'asce')
    .then(movies => res.json(movies))
})
app.get('/:id', (req, res) => {
    queries.getMovieById(req.params.id)
    .then(movie => res.json(movie))
})
app.post('/', (req, res) => {
    queries.addMovie(req.body)
    .then(movie => res.json(movie))
})
app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body)
    .then(updatedMovie => res.json(updatedMovie))
})
app.delete('/:id', (req, res) => {
    queries.deleteMovie(req.params.id)
    .then(res.sendStatus(204))
})

app.listen(port)