import { AppBar, Box, Toolbar, Typography, } from '@mui/material';

export default function Nav() {

    return (
        <Box sx={{ flexGrow: 1, bgColor: '#033076' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PDA Feedback Center
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}