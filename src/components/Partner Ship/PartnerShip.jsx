import React from 'react'
import OyuTolgoi from '../../assets/Oyutolgoi.svg'
import Dashwaanjil from '../../assets/Dashwanjil.png'
import Mobicom from '../../assets/Mobicom.png'
import Unitel from '../../assets/logo.svg'
import './PartnerShip.css'
import useApp from "../../hook/AppHook"
import { Zoom } from 'react-reveal';

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
                    <img className="partner-logo" src={OyuTolgoi} alt="Oyu Tolgoi" />
                    <img className="partner-logo" src={Mobicom} alt="Mobicom" />
                    <img className="partner-logo" src={Dashwaanjil} alt="Dashwaajil" />
                    <img className="partner-logo" src={Unitel} alt="Unitel" />
                </Zoom>
            </div>
        </div>
    )
}

export default PartnerShip