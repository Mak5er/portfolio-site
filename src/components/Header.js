import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box, Button, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { HouseOutlined, PersonOutline, TerminalOutlined, MenuOutlined } from '@mui/icons-material';
import logo from '../images/logo.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: 'transparent',
                boxShadow: isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                transition: 'background-color 0.3s, backdrop-filter 0.3s, box-shadow 0.3s',
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>Mak5er</Box>
                    </Link>
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            sx={{ color: 'primary.main' }}
                            onClick={handleMenuOpen}
                        >
                            <MenuOutlined />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                                <HouseOutlined sx={{ mr: 1 }} /> Home
                            </MenuItem>
                            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                                <PersonOutline sx={{ mr: 1 }} /> About
                            </MenuItem>
                            <MenuItem component={Link} to="/projects" onClick={handleMenuClose}>
                                <TerminalOutlined sx={{ mr: 1 }} /> Projects
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Button
                            variant="outlined"
                            sx={{ color: 'primary.main', borderColor: 'primary.main' }}
                            component={Link}
                            to="/"
                            startIcon={<HouseOutlined />}
                        >
                            Home
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ color: 'primary.main', borderColor: 'primary.main', ml: 2 }}
                            component={Link}
                            to="/about"
                            startIcon={<PersonOutline />}
                        >
                            About
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ color: 'primary.main', borderColor: 'primary.main', ml: 2 }}
                            component={Link}
                            to="/projects"
                            startIcon={<TerminalOutlined />}
                        >
                            Projects
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
