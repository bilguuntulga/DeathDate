import Laptop from '../../assets/laptop.svg'
import { Row, Col } from 'antd';
import useApp from "../../hook/AppHook"
import { Zoom, Fade } from 'react-reveal';
import './Service.css'

function Service() {
    const { Services } = useApp();

    return (
        <>
            <h1 id='service' className='service-title'>
                {
                    Services["ServicesTittle"]
                }
            </h1>

            <Row justify='center' align='bottom' gutter={20}>
                <Col>
                    <Fade left>
                        <div className="square">
                            <h2>
                                {
                                    Services["ServicesSystem"]
                                }
                            </h2>
                            <p>
                                {
                                    Services["servicesSystem"]
                                }
                            </p>
                        </div>
                    </Fade>
                </Col>
                <Col>
                    <Zoom><img className='laptop' src={Laptop} alt="laptop not found:404" /></Zoom>
                </Col>
                <Col>
                    <Fade right>
                        <div className='square'>
                            <h2>
                                {
                                    Services["ServicesMarketingTitle"]
                                }
                            </h2>
                            <p>
                                {
                                    Services["servicesMarketingpackage"]
                                }
                            </p>
                        </div>
                    </Fade>
                </Col>
            </Row>
            <br />
            <br />
            <Row justify='center' align='bottom' gutter={20}>
                <Col>
                    <Fade left>
                        <div className="square">
                            <h2>
                                {
                                    Services["ServicesLoyaltyTitle"]
                                }
                            </h2>
                            <p>
                                {
                                    Services["servicesLoyalty"]
                                }
                            </p>
                        </div>
                    </Fade>
                </Col>
                <Col>
                    <Fade right>
                        <div className="square">
                            <h2>
                                {
                                    Services["ServicesBrandNewTitle"]
                                }
                            </h2>
                            <p>
                                {
                                    Services["servicesBrandNew"]
                                }
                            </p>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </>
    );
}

export default Service;