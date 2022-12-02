import { Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

export default function Feeling() {

    const history=useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // update the feeling in store
        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        });
        // move to next page
        history.push('/understanding')
    }

    return (
        <Paper elevation={2} sx = {{padding: 2, mx: 'auto', maxWidth: 'sm'}}>
            <form onSubmit={handleSubmit}>
                <h2>How are you feeling today?</h2>
                <FormControl>
                    <InputLabel id="feeling-select">Feeling?</InputLabel>
                    <Select
                        sx={{ width: 200 }}
                        labelId="feeling-select"
                        required
                        label='Feeling?'
                        id="feeling-input"
                        value={feeling}
                        onChange={(e) => setFeeling(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                
                <Button 
                    sx={{m:1}}
                    color='inherit'
                    type='submit'
                    variant='contained'
                    >Next</Button>
            </form>
        </Paper>
    )
}