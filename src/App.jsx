import './App.css';
import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Main = lazy(() => import('./components/Main'));
const FrontEnd = lazy(() => import('./components/FrontEnd/FrontEnd'));
const Flutter = lazy(() => import('./components/Flutter/Flutter'));
const BackEnd = lazy(() => import('./components/BackEnd/BackEnd'));
const Loading = lazy(() => import('./components/Loading'));

const App = () => {
    return (
        <>
            <Suspense fallback={<Suspense><Loading /></Suspense>}>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="front-end" element={<FrontEnd />} />
                    <Route exact path="flutter" element={<Flutter />} />
                    <Route exact path="back-end" element={<BackEnd />} />
                </Routes>
                <Contact />
            </Suspense>
        </>
    );
}

export default App;