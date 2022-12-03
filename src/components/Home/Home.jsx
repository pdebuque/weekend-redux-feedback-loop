import { Paper, Button, Box } from '@mui/material';
import {useHistory} from 'react-router-dom'

export default function Home() {

const history = useHistory();

const handleClick = () =>{
    history.push('/feeling')
}

    return (
        <Paper elevation={2} sx={{ padding: 2, my:2, mx: 'auto', maxWidth: 'sm' }}>
            <h2>Welcome to the Feedback Portal</h2>
            <Button
                sx={{ m: 1 }}
                color='inherit'
                type='submit'
                variant='contained'
                onClick = {handleClick}
            >Begin survey</Button>
        </Paper>
    )
}