import { Paper, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios'

export default function Review() {

    const history=useHistory();
    const feeling = useSelector(store=>store.feeling)
    const understanding = useSelector(store=>store.understanding)
    const support = useSelector(store=>store.support)
    const comments = useSelector(store=>store.comments)

    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // post feedback
        const data={feeling,understanding,support,comments}
        axios.post('/feedback', data)
            .then(()=>console.log('successfully posted!'))
            .catch(err=>console.log('could not post!', err))
        // move to next page
        history.push('/complete')
    }

    return (
        <Paper elevation={2} sx = {{padding: 2, mx: 'auto', maxWidth: 'sm'}}>
            <form onSubmit={handleSubmit}>
                <h2>Review Your Feedback</h2>
                <Box sx={{m:1}}>Feelings: {feeling}</Box>
                <Box sx={{m:1}}>Understanding: {understanding}</Box>
                <Box sx={{m:1}}>Support: {support}</Box>
                <Box sx={{m:1}}>Comments: {comments}</Box>
                <Button 
                    sx={{m:1}}
                    color='inherit'
                    type='submit'
                    variant='contained'
                    >Submit</Button>
            </form>
        </Paper>
    )
}