// src/theme.js
import {createTheme} from '@mui/material/styles';

const mainColor = '#00efff'; // яскравий зелений колір

// src/theme.js

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: mainColor, // Ви можете змінити це на бажаний основний колір
        },
        background: {
            default: '#000e1e', // Темно-синій, майже чорний
            paper: '#000e1e', // Темно-синій, майже чорний
        },
        text: {
            primary: '#ffffff',
            secondary: '#B0B0B0',
        },
        footer: {
            default: '#010119',
        },
    },
    card: {
        backgroundColor: '#000e1e',
        '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default theme;
