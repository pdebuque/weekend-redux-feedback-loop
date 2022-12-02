const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('received post', req.body)
    const queryText = `INSERT INTO feedback
                        (feeling,understanding,support,comments)
                        VALUES
                        ($1,$2,$3,$4)`
    pool.query(queryText,[req.body.feeling, req.body.understanding,req.body.support,req.body.comments])
        .then(()=>res.sendStatus(201))
        .catch(err=>console.log('could not insert!', err))
})

module.exports = router;