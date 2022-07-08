import * as React from "react";
import Mobile from '../../assets/Phone11.svg'
import { Row, Col } from "antd";
import 'antd/dist/antd.css';
import './Ourabout.css'
import useApp from "../../hook/AppHook"
import { Zoom, Fade } from 'react-reveal';
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const OurAbout = () => {
    const { lang, setLang, About } = useApp();

    return (
        <>
            <div id="about">
                <div className="about1">
                    <Row align="center">
                        <Col>
                            <h1>
                                {
                                    About["TextTitle"]
                                }
                            </h1>
                            <h3 align="center">
                                {
                                    About["2hTitle"]
                                }
                            </h3>
                        </Col>
                    </Row>
                </div>
                <Row align="center">
                    <Col>
                        <Zoom> <img className="Phone" src={Mobile} alt="" /></Zoom>
                    </Col>
                    <Col>
                        <Row gutter={100}>
                            <Col>
                                <Fade left>
                                    <div className="ShapelisSHape1">
                                        <div className="shape11">
                                            <h2 >
                                                {
                                                    About["Circuletxt1"]
                                                } </h2>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                            <Col>
                                <Fade right>
                                    <div className="ShapelisSHape2">
                                        <div className="shape22">
                                            <h2 className="" >
                                                {
                                                    About["Circuletxt2"]
                                                } </h2>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                        <Row justify="center">
                            <Col>
                                <Fade up>
                                    <div className="ShapelisSHape3">
                                        <div className="shape33">
                                            <h2 className="" >
                                                {
                                                    About["Circuletxt3"]
                                                }
                                            </h2>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        </>
    )
}

export default OurAbout