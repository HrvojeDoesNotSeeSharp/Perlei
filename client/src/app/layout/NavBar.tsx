import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Button, Container, MenuItem } from "@mui/material";

type  Props= {
    handleEditMode:()=>void
}
export default function NavBar({handleEditMode}:Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #00308F, #00FFFF)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography variant='h4' fontWeight='bold'>Reservations</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase',
                                fontWeight: 'bold'
                            }}>
                                Reservations
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase',
                                fontWeight: 'bold'
                            }}>
                                About
                            </MenuItem>
                            <MenuItem sx={{
                                fontSize: '1.2rem', textTransform: 'uppercase',
                                fontWeight: 'bold'
                            }}>
                                Contact
                            </MenuItem>
                        </Box>
                        <Button onClick={handleEditMode} size='large' variant='contained' color='warning'>
                            Create Reservation
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
