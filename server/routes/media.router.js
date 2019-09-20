const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/media', (req, res) => {
    // const queryText = `SELECT *`
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const description = req.body.description;
    const path = req.body.mediaUrl;
    console.log(path);

    const queryText = `INSERT INTO "pics" ("path", "description") VALUES ($1, $2);`;

    pool.query(queryText, [path, description])
    .then(() => res.sendStatus(201, 'this POST is Successful'))
    .catch(() => res.sendStatus(500));
    

});

module.exports = router;