import React from 'react'
import './home.css'
import 'antd/dist/antd.css';
import useApp from "../../hook/AppHook"
import { Row, Col } from 'antd';

const Home = () => {
    const { lang, setLang, Navigation } = useApp();
    return (
        <>
            <div className="home">
                <div className='text'>
                    <Row>
                        <Col>
                            <h1>
                                {
                                    Navigation["Order"]
                                }
                            </h1>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Home