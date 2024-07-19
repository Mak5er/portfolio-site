import React from 'react';
import {Container, Typography, Box, Grid} from '@mui/material';
import Type from '../components/Type';
import {HouseOutlined, PersonOutline, TerminalOutlined} from '@mui/icons-material';

import image from '../images/home-image.svg';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';


const Home = () => {
    return (
            <Container style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: '30px',
                paddingBottom: '30px',
            }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center"
                      style={{position: 'relative', zIndex: 1, paddingTop: '9rem', paddingBottom: '2rem'}}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" color="textPrimary" gutterBottom>
                            Hi There! 👋
                        </Typography>
                        <Typography variant="h2" color="textPrimary" gutterBottom>
                            I'M <Box component="span" sx={{color: 'primary.main', fontWeight: 'bold'}}>MAKSYM
                            REVA</Box>
                        </Typography>
                        <Typography variant="h4" color="primary.main" gutterBottom>
                            <Type/>
                        </Typography>
                        <Toolbar>
                            <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main'}}
                                    component={Link}
                                    to="/" startIcon={<HouseOutlined/>}>Home</Button>
                            <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main', ml: 2}}
                                    component={Link}
                                    to="/about" startIcon={<PersonOutline/>}>About</Button>
                            <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main', ml: 2}}
                                    component={Link}
                                    to="/projects" startIcon={<TerminalOutlined/>}>Projects</Button>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign: 'right'}}>
                        <img src={image} alt="Illustration" style={{maxHeight: '450px', maxWidth: '100%'}}/>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Home;
