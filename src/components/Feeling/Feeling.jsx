import {TextField, Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

export default function Feeling() {

const dispatch = useDispatch();
const [feeling,setFeeling]= useState('');
const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({
        type: 'SET_FEELING',
        payload: feeling
    })
}

    return(
        <form onSubmit={handleSubmit}>
            <h2>How are you feeling today?</h2>
            <TextField
                type='text'
                placeholder='feeling?'
                value={feeling}
                onChange={e=>setFeeling(e.target.value)}
            ></TextField>
            <Button type = 'submit'></Button>
        </form>
    )
}