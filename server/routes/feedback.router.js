const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) =>{
    console.log('getting all feedback');
    const queryText = `SELECT * FROM feedback`;
    pool.query(queryText)
        .then((result)=>res.send(result.rows))
        .catch(err=>console.log('could not get!', err))
})

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

router.delete('/:id', (req,res) =>{
    console.log('deleting feedback');
    const queryText = `DELETE FROM feedback
                        WHERE id = $1`;
    pool.query(queryText, [req.params.id])
        .then(()=>res.sendStatus(201))
        .catch(err=>console.log('could not delete!', err))
})


module.exports = router;