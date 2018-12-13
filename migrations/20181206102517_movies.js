exports.up = (knex, Promise) => {
    return knex.schema.createTable('movies', (movies) => {
        movies.increments('id')
        movies.string('title')
        movies.string('director')
        movies.integer('year')
        movies.integer('rating')
        movies.string('poster')
    })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('movies')
}