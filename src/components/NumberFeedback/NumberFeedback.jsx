import { Paper, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function NumberFeedback({ name, next, header }) {

    const ratings = [5, 4, 3, 2, 1]
    const history = useHistory();
    const dispatch = useDispatch();
    const [rating, setRating] = useState('');
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();
        // update the feeling in store
        dispatch({
            type: `SET_${name.toUpperCase()}`,
            payload: rating
        });
        // move to next page
        history.push(`/${next}`)
    }

    return (
        <Paper elevation={2} sx={{ padding: 2, mx: 'auto', maxWidth: 'sm' }}>
            <form onSubmit={handleSubmit}>
                <h2>{header}</h2>
                <FormControl>
                    <InputLabel id={`${name}-select`}>{name}?</InputLabel>
                    <Select
                        sx={{ width: 200 }}
                        labelId={`${name}-select`}
                        required
                        label={`${name}?`}
                        id={`${name}-input`}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        {/* make the ratings elements */}
                        {ratings.map(rating => {
                            return <MenuItem key={rating} value={rating}>{rating}</MenuItem>
                        })}

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