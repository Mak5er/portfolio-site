import React, {lazy, Suspense, useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme, lightTheme} from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Error404 = lazy(() => import('./pages/Error404'));

function App() {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <ParticlesBackground/>
                <div className="app-container">
                    <ScrollToTop/>
                    <Header toggleTheme={toggleTheme}/>
                    <div className="content">
                        <Suspense fallback={<LoadingSpinner/>}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                                <Route path="*" element={<Error404/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
