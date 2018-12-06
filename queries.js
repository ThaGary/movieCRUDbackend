const db = require('./database-connection')

module.exports = {
    getAllMovies() {
        return db('movies')
    },
    getMovieById(id){
        return db('movies')
            .where({id: id})
            .first()
    },
    addMovie(newMovie) {
        return db('movies')
            .insert(newMovie)
            .returning('*')
    },
    deleteMovie(id){
        return db('movies')
            .where({id: id})
            .del()
    },
    updateMovie(id, updatedMovieInfo){
        return db('movies')
            .where({id: id})
            .update(updatedMovieInfo)
            .returning('*')
    }
}