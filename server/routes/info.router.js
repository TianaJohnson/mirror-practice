const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/get', (req, res) => {
    console.log('Get info from database');
});




/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log("IN");
    const queryText = `INSERT INTO "input-data"
                     ("info") 
                      VALUES ($1) RETURNING "id";`;
        pool.query(queryText, [req.body.info])
        .then(() => {
            console.log('server side info Post');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Something went wrong in server post', error);

            res.sendStatus(500);;
        });
        
    });

module.exports = router;