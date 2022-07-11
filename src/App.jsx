import './App.css';
import { React, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact'
const Main = lazy(() => import('./components/Main'));
const FrontEnd = lazy(() => import('./components/FrontEnd/FrontEnd'));
const Flutter = lazy(() => import('./components/Flutter/Flutter'));
const BackEnd = lazy(() => import('./components/BackEnd/BackEnd'));
const Loading = lazy(() => import('./components/Loading'));

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route exact path="/" element={
                    <Suspense fallback={<Suspense><Loading /></Suspense>}>
                        <Main />
                    </Suspense>
                } />
                <Route exact path="front-end" element={
                    <Suspense fallback={<Suspense><Loading /></Suspense>}>
                        <FrontEnd />
                    </Suspense>
                } />
                <Route exact path="flutter" element={
                    <Suspense fallback={<Suspense><Loading /></Suspense>}>
                        <Flutter />
                    </Suspense>
                } />
                <Route exact path="back-end" element={
                    <Suspense fallback={<Suspense><Loading /></Suspense>}>
                        <BackEnd />
                    </Suspense>
                } />
            </Routes>
            <Contact />
        </>
    );
}

export default App;