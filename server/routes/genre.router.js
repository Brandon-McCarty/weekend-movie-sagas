const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  //  query to get all genres for selected movie
  const query = `
                  SELECT "genres".name FROM "genres"
                  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
                  JOIN "movies" ON "movies_genres".movie_id = "movies".id
                  WHERE "movies".id = $1;
                `;

    const value = [req.params.id]
    pool.query(query, value)
      .then( result => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get movie details', err);
        res.sendStatus(500)
      })
});

module.exports = router;