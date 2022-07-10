import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import SmoothScroll from 'smooth-scroll';
import 'antd/dist/antd.min.css';
import Main from './Main';
import FrontEnd from './components/FrontEnd/FrontEnd';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="front-end" element={<FrontEnd />} />
                </Route>
            </Routes>
            <Contact />
        </>
    )
}

export default App