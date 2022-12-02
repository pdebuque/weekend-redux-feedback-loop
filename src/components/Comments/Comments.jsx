import { Paper, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // update the feeling in store
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        });
        // move to next page
        history.push('/review')
    }

    return (
        <Paper elevation={2} sx={{ padding: 2, mx: 'auto', maxWidth: 'sm' }}>
            <form onSubmit={handleSubmit}>
                <h2>Any comments you want to leave?</h2>
                <FormControl>
                    <TextField
                        label="Comments"
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    ></TextField>
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