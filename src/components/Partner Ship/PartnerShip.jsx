import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import OyuTolgoi from '../../assets/Oyutolgoi.svg'
import Dashwaanjil from '../../assets/Dashwanjil.png'
import Mobicom from '../../assets/Mobicom.png'
import Unitel from '../../assets/logo.svg'
import './PartnerShip.css'
import useApp from "../../hook/AppHook"
import { Zoom } from 'react-reveal';
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})


const PartnerShip = () => {
    const { lang, setLang, Customer } = useApp();

    return (
        <>
            <h1 id='partner' align="center" className='title' > <b>
                {
                    Customer["CustomerTitle"]
                }
            </b></h1>
            <div className='Partner' align="center">
                <Zoom>
                    <Row align='middle' justify='center' gutter={[3, { sm: 50, md: 75, lg: 100 }]} >
                        <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }}>
                            <img style={{ width: 150 }} src={OyuTolgoi} alt="" />
                        </Col >
                        <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }}>
                            <img style={{ width: 150 }} src={Mobicom} alt="" />
                        </Col >
                        <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }}>
                            <img style={{ width: 150 }} src={Dashwaanjil} alt="" />
                        </Col>
                        <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }}>
                            <img style={{ width: 150 }} src={Unitel} alt="" />
                        </Col>
                    </Row>
                </Zoom>
            </div>
        </>
    )
}

export default PartnerShip