import { Paper, Button, Box, Typography } from '@mui/material';
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
        <Paper elevation={2} sx = {{padding: 2, my:2, mx: 'auto', maxWidth: 'sm'}}>
            <form onSubmit={handleSubmit}>
                <h2>Review Your Feedback</h2>
                <Typography sx={{m:1}}>Feelings: {feeling}</Typography>
                <Typography sx={{m:1}}>Understanding: {understanding}</Typography>
                <Typography sx={{m:1}}>Support: {support}</Typography>
                <Typography sx={{m:1}}>Comments: '{comments}'</Typography>
                <Button 
                    sx={{m:1}}
                    color='primary'
                    type='submit'
                    variant='contained'
                    >Submit</Button>
                    <Button
                        sx={{ m: 1 }}
                        color='inherit'
                        variant='contained'
                        onClick={() => history.push(`/feeling`)}
                    >
                        Start Over
                    </Button>
            </form>
        </Paper>
    )
}