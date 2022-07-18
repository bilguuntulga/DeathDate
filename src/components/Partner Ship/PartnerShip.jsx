import React from 'react';
import Dashwaanjil from '../../assets/partner-logos/Dashwanjil.png';
import Skytel from '../../assets/partner-logos/skytel-logo.png';
import EHotel from '../../assets/partner-logos/ehotel-logo.png';
import useApp from "../../hook/AppHook";
import { Zoom } from 'react-reveal';
import './PartnerShip.css';

const PartnerShip = () => {
    const { Customer } = useApp();

    return (
        <div id='partner' className='partner-ship-container'>
            <Zoom>
                <h1 className='title' >
                    {Customer["CustomerTitle"]}
                </h1>
            </Zoom>
            <div className='partners'>
                <Zoom>
                    <img className="partner-logo" src={Dashwaanjil} alt="Mobicom" />
                    <img className="partner-logo" src={Skytel} alt="Skytel" />
                    <img className="partner-logo" src={EHotel} alt="EHotel" />
                </Zoom>
            </div>
        </div>
    )
}

export default PartnerShip