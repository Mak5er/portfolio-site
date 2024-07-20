import {createTheme} from '@mui/material/styles';

const mainColor = '#00efff';


const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: mainColor,
        },
        background: {
            default: '#000e1e',
            paper: '#000e1e',
            menu: '#010119',
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
