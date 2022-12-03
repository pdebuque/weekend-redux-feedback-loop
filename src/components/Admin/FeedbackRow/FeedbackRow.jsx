import { TableRow, TableCell, Button, Modal, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function FeedbackRow({ feedback, getFeedback }) {

    // local state to handle modal
    const [open, setOpen] = useState(false)

    const deleteFeedback = () => {
        console.log('deleting this feedback');
        axios.delete(`/feedback/${feedback.id}`)
            .then(() => {
                console.log('delete successful!');
                getFeedback();
            })
            .catch(err => console.log('could not delete!'))
        // axios delete request, then run get again
    }

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        border: '2px solid #fff',
        boxShadow: 24,
        padding: 10,
    };

    return (<>
        <TableRow>
            <TableCell>{feedback.feeling}</TableCell>
            <TableCell>{feedback.understanding}</TableCell>
            <TableCell>{feedback.support}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
            <TableCell>
                <Button
                    size='small'
                    variant="outlined"
                    onClick={() => setOpen(!open)}
                >
                    x
                </Button></TableCell>
        </TableRow>
        <Modal
            open={open}
            onClose={() => setOpen(!open)}
        >
            <Box style={modalStyle} bgcolor="background.paper">
                <Typography id="delete-dialogue" variant="h6" component="h2">
                    Are you sure you want to delete?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    This action cannot be undone.
                </Typography>
                <Button onClick = {deleteFeedback}>confirm</Button>
                <Button onClick = {()=>setOpen(!open)}>cancel</Button>
            </Box>
        </Modal>
    </>
    )
}