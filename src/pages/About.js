import React from 'react';
import {Container, Grid, Box, Typography, IconButton} from '@mui/material';
import {GitHub, Instagram, Telegram, Twitter} from "@mui/icons-material";
import Tilt from "react-parallax-tilt";
import avatar from "../images/avatar.svg";
import Toolstack from "../components/Toolstack";
import Techstack from "../components/Techstack";
import {FaMousePointer} from "react-icons/fa";

const About = () => {
    return (
        <Container
            style={{height: '100%', display: 'flex', alignItems: 'center', paddingTop: '70px', paddingBottom: '70px'}}>
            <Grid container spacing={2} alignItems="center" justifyContent="center"
                  style={{position: 'relative', zIndex: 1, paddingTop: '100px', paddingBottom: '20px'}}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h3" color="textPrimary" gutterBottom>
                        LET ME <Box component="span"
                                    sx={{color: 'primary.main', fontWeight: 'bold'}}>INTRODUCE</Box> MYSELF
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="h6" color="textPrimary" paragraph>
                        Hi Everyone, I am Maks from <Box component="span" sx={{color: 'primary.main'}}>Lviv,
                        Ukraine</Box>.
                    </Typography>
                    <br/>
                    <Typography variant="h6" color="textPrimary" paragraph>
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    </Typography>
                    <Typography variant="h6" color="textPrimary" paragraph>
                        I'm interested in building <Box component="span" sx={{color: 'primary.main'}}>Telegram
                        Bots</Box> and also in areas related to <Box component="span"
                                                                     sx={{color: 'primary.main'}}>Devops</Box>.
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        Apart from coding, I like to
                    </Typography>
                    <ul className='hobbies'>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Play </Box>
                            games
                        </li>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Read </Box>
                            books
                        </li>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Fix </Box>
                            computers
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={4} style={{textAlign: 'center'}}>
                    <Tilt>
                        <img src={avatar} alt="Profile" style={{width: 'auto', maxHeight: '550px'}}/>
                    </Tilt>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Techstack/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Toolstack/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            FIND ME ON
                        </Typography>
                        <Typography variant="h6" color="textPrimary" paragraph>
                            Feel free to connect with me
                        </Typography>
                        <Box>
                            <IconButton aria-label="GitHub" href="https://github.com/Mak5er">
                                <GitHub sx={{color: 'primary.main'}}/>
                            </IconButton>
                            <IconButton aria-label="Twitter" href="https://x.com/Mak5er1">
                                <Twitter sx={{color: 'primary.main'}}/>
                            </IconButton>
                            <IconButton aria-label="Telegram" href="https://t.me/mak5er">
                                <Telegram sx={{color: 'primary.main'}}/>
                            </IconButton>
                            <IconButton aria-label="Instagram" href="https://www.instagram.com/mak5er/">
                                <Instagram sx={{color: 'primary.main'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
