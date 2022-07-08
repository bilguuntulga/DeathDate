import Laptop from '../../assets/laptop.svg'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import useApp from "../../hook/AppHook"
import './Service.css'
import { Zoom, Fade } from 'react-reveal';
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

function Service() {
    const { lang, setLang, Services } = useApp();

    return (
        <>
            <h1 id='service' className='service-title' align="center">
                {
                    Services["ServicesTittle"]
                }
            </h1>

            <div className='Services' align="center">
                <Row justify='center' align='bottom' gutter={[80, 80]}>
                    <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }} xl={{ span: 10 }} xxl={{ span: 5 }}>
                        <Fade left>
                            <div className="Square">
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
                    <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }} xl={{ span: 10 }} xxl={{ span: 5 }}>
                        <div align="center">
                            <Zoom><img src={Laptop} alt="" /></Zoom>
                        </div>
                    </Col>
                    <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }} xl={{ span: 20 }} xxl={{ span: 5 }}>
                        <Fade right>
                            <div className='Square'>
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
                <Row justify='center' align='bottom' gutter={[40, 90]}>
                    <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }} xl={{ span: 10 }} xxl={{ span: 5 }}>
                        <Fade left>
                            <div className="Square">
                                <h2>
                                    {
                                        Services["ServicesLoyaltyTitle"]
                                    }
                                </h2>
                                <p>{
                                    Services["servicesLoyalty"]
                                }</p>
                            </div>
                        </Fade>
                    </Col>
                    <Col sm={{ span: 20 }} md={{ span: 10 }} lg={{ span: 5 }} xl={{ span: 10 }} xxl={{ span: 5 }}>
                        <Fade right>
                            <div className="Square">
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

            </div>
        </>
    );
}

export default Service;