import React from 'react';
import {Card, CardContent, CardMedia, Typography, Button, Grid, Box} from '@mui/material';
import {Helmet} from 'react-helmet';
import {useTheme} from '@mui/material/styles';
import jokeBot from '../images/Projects/jokeBot.webp'
import multiBot from '../images/Projects/multiBot.webp'
import downloaderBot from '../images/Projects/downloaderBot.webp'
import jokeSite from '../images/Projects/jokeSite.webp'

const projects = [
    {
        title: 'Joke-Bot',
        photo: jokeBot,
        description: `This code is a Python script for a Telegram bot. It utilizes the aiogram library for interacting with the Telegram Bot API and includes various functionalities for handling user interactions, sending jokes, managing bans, and more.`,
        github: 'https://github.com/Mak5er/Joke-Bot',
        demo: 'https://t.me/AnekdotyRobot',
    },
    {
        title: 'Multi-Bot',
        photo: multiBot,
        description: `This project is a Telegram bot - multitool where users can perform various daily tasks. The bot is implemented using the Python programming language and uses the Aiogram framework to interact with the Telegram API.`,
        github: 'https://github.com/Mak5er/Multi-Bot',
        demo: 'https://t.me/MakserMultiBot',
    },
    {
        title: 'Downloader-Bot',
        photo: downloaderBot,
        description: `A bot for downloading videos, photos, and audio from social networks. 📱 Currently available - TikTok, Instagram, YouTube, X(Twitter). Just send the bot a link. 🔗 The bot can also be added to the chat! 💬`,
        github: 'https://github.com/Mak5er/Downloader-Bot',
        demo: 'https://t.me/MaxLoadBot',
    },
    {
        title: 'Joke-Site',
        photo: jokeSite,
        description: `React and Flask API based site with Ukrainian jokes. This project consists of a React frontend and a Flask backend, designed to bring laughter to your day with a collection of ukrainian jokes🇺🇦`,
        github: 'https://github.com/Mak5er/joke-site-react',
        demo: 'https://anekdoty.pp.ua/',
    },
];

const Projects = () => {
    const theme = useTheme();

    const maxContentHeight = Math.max(...projects.map(project => project.description.length));

    return (
        <>
            <Helmet>
                <link rel="preload" href={jokeBot} as="image/webp"/>
                <link rel="preload" href={jokeSite} as="image/webp"/>
                <link rel="preload" href={multiBot} as="image/webp"/>
                <link rel="preload" href={downloaderBot} as="image/webp"/>
            </Helmet>
            <Box
                sx={{
                    color: theme.palette.text.primary,
                    padding: theme.spacing(4),
                    position: 'relative',
                    paddingTop: '150px',
                    paddingBottom: '50px'
                }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        marginBottom: theme.spacing(4),
                    }}
                >
                    My Recent <span style={{color: theme.palette.primary.main}}>Works</span>
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{display: 'flex', justifyContent: 'center'}}>
                            <Card
                                sx={{
                                    width: '100%',
                                    maxWidth: 350,
                                    backgroundColor: theme.palette.background.paper,
                                    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                                    },
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >

                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: '200px',
                                        objectFit: 'contain',
                                        alignPhoto: 'center',
                                        borderRadius: '10px',
                                        padding: '10px'
                                    }}
                                    image={project.photo}
                                    title={project.title}
                                />
                                <CardContent
                                    sx={{
                                        minHeight: maxContentHeight,
                                    }}
                                >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {project.description}
                                    </Typography>
                                    <Box sx={{display: 'flex', gap: theme.spacing(2), marginTop: theme.spacing(2)}}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            href={project.github}
                                        >
                                            GitHub
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            href={project.demo}
                                        >
                                            Try
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default Projects;
