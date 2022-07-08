import * as React from "react";
import Mobile from '../../assets/Phone11.svg'
import { Row, Col } from "antd";
import './Ourabout.css'
import useApp from "../../hook/AppHook"
import { Fade } from 'react-reveal';

const OurAbout = () => {
    const { About } = useApp();

    return (
        <div id="about">
            <h1 className="title">
                {
                    About["Title"]
                }
            </h1>
            <h3 className="subtitle">
                {
                    About["Subtitle"]
                }
            </h3>
            <Row justify="center" align="middle">
                <Col>
                    <Fade left><img className="phone" src={Mobile} alt="Phone" /></Fade>
                </Col>
                <Col>
                    <Row align="center">
                        <Col>
                            <Fade left>
                                <div className="shape1">
                                    <p>
                                        {
                                            About["Circuletxt1"]
                                        }
                                    </p>
                                </div>
                            </Fade>
                        </Col>
                        <Col>
                            <Fade right>
                                <div className="shape2">
                                    <p>
                                        {
                                            About["Circuletxt2"]
                                        }
                                    </p>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            <Fade up>
                                <div className="shape3">
                                    <p>
                                        {
                                            About["Circuletxt3"]
                                        }
                                    </p>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default OurAbout