const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/public/:id', (req, res) => {
    
    const queryText = `SELECT * FROM "memories"
    JOIN "pics" ON "pics"."id" = "memories"."pics_id"
    JOIN "user" ON "user"."id" = "memories"."user_id"
    WHERE "user"."id"= $1;`;
    
    
    
    console.log('~~THIS IS A NEW QUERY~~');
    // console.log(req.body, 'this is the body');
    // console.log(req, 'what is this on the server');
    console.log(req.params.id)

    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('Error completing SELECT media query', err);
        res.sendStatus(500);
    });
    
    
});

module.exports = router;
