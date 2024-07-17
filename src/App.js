// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {

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
