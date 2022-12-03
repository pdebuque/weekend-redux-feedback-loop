import { Modal, Box, Typography, Button } from '@mui/material';
import axios from 'axios';


export default function TableModal({ feedback, getFeedback, setOpen, open }) {

    const deleteFeedback = () => {
        console.log('deleting this feedback');
        // axios delete request, then run get again
        axios.delete(`/feedback/${feedback.id}`)
            .then(() => {
                console.log('delete successful!');
                getFeedback();
                setOpen(false);
            })
            .catch(err => console.log('could not delete!', err))

        
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

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box style={modalStyle} bgcolor="background.paper">
                <Typography id="delete-dialogue" variant="h6" component="h2">
                    Are you sure you want to delete?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    This action cannot be undone.
                </Typography>
                <Button onClick={deleteFeedback}>confirm</Button>
                <Button onClick={() => setOpen(false)}>cancel</Button>
            </Box>
        </Modal>
    )
}