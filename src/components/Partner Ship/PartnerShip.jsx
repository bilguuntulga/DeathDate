import React from 'react'
import { Row, Col } from 'antd';
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
        <>
            <h1 id='partner' align="center" className='title' > <b>
                {
                    Customer["CustomerTitle"]
                }
            </b></h1>
            <div className='Partner' align="center">
                <Zoom>
                    <Row align='middle' justify='center' >
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