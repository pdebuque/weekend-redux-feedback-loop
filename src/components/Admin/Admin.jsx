/* 
    get all existing feedbacks and display them
    option to delete a piece of feedback
    modal to confirm prior to delete
*/

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'

export default function Admin() {

    const [feedback, setFeedback] = useState([])
    //get request: get all feedbacks and store it in state
    const getFeedback = () => {
        axios.get('/feedback')
            .then(({ data }) => {
                console.log(data)
                setFeedback(data)
            })
            .catch(err => console.log('could not get!', err))
    }

    useEffect(()=>{
        getFeedback()
    }, [])

    return (
        <Paper elevation={2} sx={{ padding: 2, my: 2, mx: 'auto', maxWidth: 'sm' }}>
            <h2>Past feedback</h2>
            <TableContainer component = {Paper} >
            <Table size="small" aria-label="feedback table">
                <TableHead >
                    <TableRow>
                        <TableCell sx={{fontWeight: 700}} >Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedback.map(el => {
                        return (
                            <TableRow key={el.id}>
                                <TableCell>{el.feeling}</TableCell>
                                <TableCell>{el.understanding}</TableCell>
                                <TableCell>{el.support}</TableCell>
                                <TableCell>{el.comments}</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
</TableContainer>

        </Paper>

    )
}