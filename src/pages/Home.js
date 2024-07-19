import React from 'react';
import {Helmet} from 'react-helmet';
import {Container, Typography, Box, Grid, Toolbar, Button} from '@mui/material';
import {HouseOutlined, PersonOutline, TerminalOutlined} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import Type from '../components/Type';
import homeImage from '../images/home-image.svg';

const Home = () => {

    return (
        <>
            <Helmet>
                <link rel="preload" href={homeImage} as="image"/>
            </Helmet>
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pt: '30px',
                    pb: '30px',
                    position: 'relative'
                }}
            >
                <Grid container spacing={2} alignItems="center" justifyContent="center"
                      sx={{position: 'relative', zIndex: 1, pt: '9rem', pb: '2rem'}}
                >
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" color="textPrimary" gutterBottom>
                            Hi There! 👋
                        </Typography>
                        <Typography variant="h2" color="textPrimary" gutterBottom>
                            I'M <Box component="span" sx={{color: 'primary.main', fontWeight: 'bold'}}>MAKSYM REVA</Box>
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
                    <Grid item xs={12} md={6} sx={{textAlign: 'right', position: 'relative'}}>
                        <img
                            src={homeImage}
                            alt="Illustration"
                            style={{
                                maxHeight: '450px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Home;
