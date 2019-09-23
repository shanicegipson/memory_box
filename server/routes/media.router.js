const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/user', rejectUnauthenticated, (req, res) => {
    
    const queryText = `SELECT * FROM "memories"
    JOIN "pics" ON "pics"."id" = "memories"."pics_id"
    JOIN "user" ON "user"."id" = "memories"."user_id"
    WHERE "user"."id"=$1;`;

    const user = req.user;

    console.log(user, 'this should be the user');

    pool.query(queryText, [user.id])
    .then((result) => {res.send(result.rows);})
    .catch((err) => {
        console.log('Error completing SELECT media query', err);
        res.sendStatus(500);
    });
    
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const description = req.body.description;
    const path = req.body.mediaUrl.image;
    const user = req.body.mediaUrl.user;

    let queryText = `INSERT INTO "pics" ("path", "description") VALUES ($1, $2) RETURNING "id";`;

    pool.query(queryText, [path, description])
    .then((response) => {

        queryText = `INSERT INTO "memories" ("user_id", "pics_id") VALUES ($1, $2);`;

        pool.query(queryText, [user, response.rows[0].id])
            .then((response) => {
                res.sendStatus(201, 'Memories POST is Successful')
            })
            .catch((err) => {
                res.sendStatus(500)
            })
    })
    .catch((err) => {
        console.log(`Error in saving pics ${err}`)
        res.sendStatus(500)}
    );
    

});

router.put('/edit/:id', (req, res) => {
    const updateItem = req.body;
    const itemId = req.params.id;

    console.log(itemId, 'this is the server side pic Id');
    console.log(updateItem, 'this is the item being updated');

    const queryText = `UPDATE "pics"
    SET "description" $1
    WHERE "id" = $2;`;

    const queryValues = [
        updatedItem.description,
        itemId
      ];

    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error Updating item info', err);
      res.sendStatus(500);
    });
})

module.exports = router;