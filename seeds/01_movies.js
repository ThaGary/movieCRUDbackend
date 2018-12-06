
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {
          title: 'Walk Hard: The Dewey Cox Story',
          director: 'Jake Kasdan',
          year: 2007,
          rating: 5,
          poster: 'https://upload.wikimedia.org/wikipedia/en/b/be/Walk_hard_poster_07.jpg'
        },
        {
          title: 'Princess Mononoke',
          director: 'Hayao Miyazaki',
          year: 1997,
          rating: 4,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png'
        },
        {
          title: 'Dude, Where\'s My Car?',
          director: 'Danny Leiner',
          year: 2000,
          rating: 4,
          poster: 'https://upload.wikimedia.org/wikipedia/en/d/df/Dude_Wheres_My_Car_movie.jpg'
        },
        {
          title: 'Rubber',
          director: 'Quentin Dupieux',
          year: 2010,
          rating: 1,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Rubber-2010-film-poster.jpg'
        },
        {
          title: 'Team America: World Police',
          director: 'Trey Parker',
          year: 2004,
          rating: 3,
          poster: 'https://upload.wikimedia.org/wikipedia/en/5/53/Team_america_poster_300px.jpg'
        }
      ]);
    });
};