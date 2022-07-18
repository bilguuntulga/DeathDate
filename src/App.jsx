import './App.css';
import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Main = lazy(() => import('./pages/Main'));
const Loading = lazy(() => import('./components/Loading'));
const Job = lazy(() => import('./components/Job/Job'));

const App = () => {
    return (
        <>
            <Suspense fallback={<Suspense><Loading /></Suspense>}>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="front-end" element={<Job type="Front-End" />} />
                    <Route exact path="flutter" element={<Job type="Flutter" />} />
                    <Route exact path="back-end" element={<Job type="Back-End" />} />
                </Routes>
                <Contact />
            </Suspense>
        </>
    );
}

export default App;