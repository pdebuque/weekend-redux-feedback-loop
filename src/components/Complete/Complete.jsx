import { Paper, Button, } from '@mui/material';
import { useHistory } from 'react-router-dom'

export default function Complete() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <Paper elevation={2} sx={{ padding: 2, my: 2, mx: 'auto', maxWidth: 'sm' }}>
            <h2>Thank you for your feedback!</h2>
            <Button
                sx={{ m: 1 }}
                color='inherit'
                type='submit'
                variant='contained'
                onClick={handleClick}
            >Home</Button>
        </Paper>
    )
}