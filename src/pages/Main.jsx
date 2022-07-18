import React from 'react';
import Home from '../components/Home/Home';
import OurAbout from '../components/OurAbout/OurAbout';
import Service from '../components/Service/Service';
import HumanResources from '../components/HumanResources/HumanResources';
import PartnerShip from '../components/Partner Ship/PartnerShip';

const Main = () => {
    return (
        <>
            <Home />
            <OurAbout />
            <Service />
            <HumanResources />
            <PartnerShip />
        </>
    );
}

export default Main;