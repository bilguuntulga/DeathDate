import React from 'react'
import useApp from "../../hook/AppHook"
import Computer from "../../assets/Computer.png"
import User from "../../assets/User.png"
import Calendar from "../../assets/Calendar.png"
import { Fade } from 'react-reveal'
import './HumanResources.css'


function HumonResources() {

    const { HumanResources } = useApp();

    return (
        <div className="human-resource-container">
            <h1 align="center">{HumanResources["HumanResourcesTitle"]}
            </h1>
            <div className="jobs">
                <Fade left>
                    <div className="window1" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window1Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <button className='job-button'>
                            {HumanResources["Button"]}
                        </button>
                    </div>
                </Fade>
                <Fade down>
                    <div className="window2" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window2Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <button className='job-button'>{HumanResources["Button"]}</button>
                    </div>
                </Fade>
                <Fade right>
                    <div className="window3" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window3Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <button className='job-button'>{HumanResources["Button"]}</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default HumonResources