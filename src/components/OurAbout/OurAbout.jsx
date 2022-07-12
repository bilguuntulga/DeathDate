import * as React from "react";
import Mobile from '../../assets/Phone11.svg'
import './Ourabout.css'
import useApp from "../../hook/AppHook"
import { Fade, Zoom } from 'react-reveal';

const OurAbout = () => {
    const { About } = useApp();

    return (
        <div className="about-container" id="about">
            <Zoom>
                <h1 className="title">{About["Title"]}</h1>
                <h3 className="subtitle">{About["Subtitle"]}</h3>
            </Zoom>
            <div className="row">
                <div className="col1">
                    <Fade left><img className="phone" src={Mobile} alt="Phone" /></Fade>
                </div>
                <div className="col2">
                    <div className="col2-row1">
                        <Fade left>
                            <div className="shape1">
                                <p>{About["Circuletxt1"]}</p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="shape2">
                                <p>{About["Circuletxt2"]}</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col2-row2">
                        <Fade up>
                            <div className="shape3">
                                <p>{About["Circuletxt3"]}</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurAbout