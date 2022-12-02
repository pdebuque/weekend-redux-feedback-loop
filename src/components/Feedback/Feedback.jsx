import { Paper, Button, FormControl, InputLabel, Select, MenuItem, TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Feedback({ name, next, header, numbered, prev }) {

    const store = useSelector(store=>store)

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
    const ratings = [5, 4, 3, 2, 1];

    
    return (
        <Paper elevation={2} sx={{ padding: 2, my: 2, mx: 'auto', maxWidth: 'sm' }}>
            <form onSubmit={handleSubmit}>
                <h2>{header}</h2>
                
                    {store[name] && <Box sx ={{m: 2, fontStyle: 'italic'}} >You answered '{store[name]}'</Box>}
                
                {numbered ?  /* conditional handles numbered vs. text feedback */
                   <FormControl>
                        <InputLabel id={`${name}-select`}>{name}?</InputLabel>
                        <Select
                            sx={{ width: 150 }}
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
                    :
                    <FormControl>
                        <TextField
                            label={`${name}`}
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        ></TextField>
                    </FormControl>
                }
                <Box>
                    <Button
                        sx={{ m: 1 }}
                        color='primary'
                        type='submit'
                        variant='contained'
                    >Next</Button>
                    <Button
                        sx={{ m: 1 }}
                        color='inherit'
                        variant='contained'
                        onClick={() => history.push(`/${prev}`)}
                    >
                        Back
                    </Button>
                </Box>
            </form>

        </Paper>
    )
}