import React from 'react'
import Navigation from './components/Navigation/Navigation'
import OurAbout from './components/OurAbout/OurAbout'
import Contact from './components/Contact/Contact'
import Service from './components/Service/Service'
import PartnerShip from './components/Partner Ship/PartnerShip'
import Home from './components/Home/Home'
import HumanResources from './components/HumanResources/HumanResources'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    return (
        <>
            <Navigation />
            <Home />
            <OurAbout />
            <Service />
            <HumanResources />
            <PartnerShip />
            <Contact />
        </>
    )
}

export default App