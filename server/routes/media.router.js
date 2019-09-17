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
    const queryText = `INSERT INTO "pics" (path) VALUES ($1);`;
    pool.query(queryText)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
    

});

module.exports = router;