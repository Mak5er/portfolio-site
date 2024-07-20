import { createTheme } from '@mui/material/styles';

const mainColorDark = '#00efff';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: mainColorDark,
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

const mainColorLight = '#4a65e8';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: mainColorLight,
        },
        background: {
            default: '#E3E6ECFF',
            paper: '#E3E6ECFF',
            menu: '#DBE2EF',
        },
        text: {
            primary: '#000000',
            secondary: '#112D4E',
        },
        footer: {
            default: '#DBE2EF',
        },
    },
    card: {
        backgroundColor: '#DBE2EF',
        '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});
