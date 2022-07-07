import React from 'react'
import { Row, Col } from "antd";
import useApp from "../../hook/AppHook"
import Computer from "../../assets/Computer.png"
import User from "../../assets/User.png"
import Calendar from "../../assets/Calendar.png"
import './HumanResources.css'


function HumonResources() {

    const { lang, setLang, HumanResources } = useApp();

    return (
        <>
            <div id='HumonResources' className="HUman">
                <h1 align="center">
                    {
                        HumanResources["HumanResourcesTitle"]
                    }
                </h1>
                <Row align='center' gutter={[50, 50]}>
                    <Col>
                        <div className="window1" align="center">
                            <Col>
                                <img src={Computer} alt="" />
                                <b>
                                    {
                                        HumanResources["Window1Title"]
                                    }
                                </b>
                                <hr />
                            </Col>
                            <Col>
                                <img src={User} alt="" />
                                {
                                    HumanResources["Developers"]
                                }
                            </Col>
                            <Col>
                                <img src={Calendar} alt="" />
                                {
                                    HumanResources["WindowFullTime"]
                                }
                            </Col>
                            <Col align="center">
                                <button className='HUmanButton'>
                                    {
                                        HumanResources["Button"]
                                    }
                                </button>
                            </Col>
                        </div>
                    </Col>
                    <Col>
                        <div className="window2" align="center">
                            <Col>
                                <img src={Computer} alt="" />
                                <b>
                                    {
                                        HumanResources["Window2Title"]
                                    }
                                </b>
                                <hr />
                            </Col>
                            <Col>
                                <img src={User} alt="" />
                                {
                                    HumanResources["Developers"]
                                }
                            </Col>
                            <Col>
                                <img src={Calendar} alt="" />
                                {
                                    HumanResources["WindowFullTime"]
                                }
                            </Col>
                            <Col align="center">
                                <button className='HUmanButton'>
                                    {
                                        HumanResources["Button"]
                                    }
                                </button>
                            </Col>
                        </div>
                    </Col>
                    <Col>
                        <div className="window3" align="center">
                            <Col>
                                <img src={Computer} alt="" />
                                <b>
                                    {
                                        HumanResources["Window3Title"]
                                    }
                                </b>
                                <hr />
                            </Col>
                            <Col>
                                <img src={User} alt="" />
                                {
                                    HumanResources["Developers"]
                                }
                            </Col>
                            <Col>
                                <img src={Calendar} alt="" />
                                {
                                    HumanResources["WindowFullTime"]
                                }
                            </Col>
                            <Col align="center">
                                <button className='HUmanButton'>
                                    {
                                        HumanResources["Button"]
                                    }
                                </button>
                            </Col>
                        </div>
                    </Col>

                </Row>
            </div>

        </>
    )
}

export default HumonResources