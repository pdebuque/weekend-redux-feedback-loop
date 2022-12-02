import { Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

export default function Understanding() {

    const history=useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState('');
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // update store
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        });
        // move to next page
        history.push('/comments')
    }

    return (
        <Paper elevation={2} sx = {{padding: 2, mx: 'auto', maxWidth: 'sm'}}>
            <form onSubmit={handleSubmit}>
                <h2>How well are you understanding the content?</h2>
                <FormControl>
                    <InputLabel id="understanding-select">Understanding?</InputLabel>
                    <Select
                        sx={{ width: 200 }}
                        labelId="understanding-select"
                        // class='form-input'
                        // name="type"
                        requied
                        label='Understanding?'
                        id="understanding-input"
                        value={understanding}
                        onChange={(e) => setUnderstanding(e.target.value)}
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