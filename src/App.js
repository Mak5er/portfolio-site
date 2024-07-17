// src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true)
        useEffect(() => {
            setTimeout(() => setLoading(false), 3300)
        }, [])
        if (loading) {
            return <LoadingSpinner/>
            }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <Router>
                    <ParticlesBackground />
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                    </Routes>
                </Router>
            )}
        </ThemeProvider>
    );
}

export default App;
