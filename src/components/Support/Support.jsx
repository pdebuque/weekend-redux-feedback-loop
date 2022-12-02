import { Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Support() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [support, setSupport] = useState('');
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // update the store
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        });
        // move to next page
        history.push('/comments')
    }

    return (
        <Paper elevation={2} sx={{ padding: 2, mx: 'auto', maxWidth: 'sm' }}>
            <form onSubmit={handleSubmit}>
                <h2>How well are you being supported?</h2>
                <FormControl>
                    <InputLabel id="feeling-select">Support?</InputLabel>
                    <Select
                        sx={{ width: 200 }}
                        labelId="support-select"
                        // class='form-input'
                        // name="type"
                        required
                        label='Support?'
                        id="support-input"
                        value={support}
                        onChange={(e) => setSupport(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    sx={{ m: 1 }}
                    color='inherit'
                    type='submit'
                    variant='contained'
                >Next</Button>
            </form>
        </Paper>
    )
}