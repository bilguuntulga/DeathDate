import React from 'react'
import './home.css'
import 'antd/dist/antd.css';
import useApp from "../../hook/AppHook"
import { Row, Col } from 'antd';
import { Zoom } from 'react-reveal';

const Home = () => {
    const {Navigation } = useApp();
    return (
        <>
            <div className="home" id='home'>
                <div className='text'>
                    <Row>
                        <Col>
                            <Zoom>
                                <h1>
                                    {
                                        Navigation["Order"]
                                    }
                                </h1>
                            </Zoom>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Home