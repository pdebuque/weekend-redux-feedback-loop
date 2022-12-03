import { TableRow, TableCell, Button, } from '@mui/material';
import { useState } from 'react';
import TableModal from '../TableModal/TableModal'

export default function FeedbackRow({ feedback, getFeedback }) {

    // local state to handle modal
    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell>
                    <Button
                        size='small'
                        variant="outlined"
                        onClick={() => setOpen(!open)}
                    >
                        x
                    </Button></TableCell>
            </TableRow>
            <TableModal
                getFeedback={getFeedback}
                feedback={feedback}
                setOpen={setOpen}
                open={open}
            />
        </>
    )
}