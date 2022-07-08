import * as React from "react";
import { Row, Col } from "antd";
import { IoIosCall } from "react-icons/io";
import { GrMap } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import cIcon from '../../assets/C.png';
import contact from '../../assets/Contact.png'
import useApp from "../../hook/AppHook"

const Contact = () => {
    const { Contact } = useApp();

    return (
        <div>

            <h1 id="contact" align="center">
                {
                    Contact["ContactTitle"]
                }
            </h1>
            <div >
                <Row align="center">
                    <Col sm={{ span: 12 }} lg={{ span: 5 }}>
                        <h2 className='middle-text'><IoIosCall size={30} />+976 76002001</h2>
                    </Col>
                    <Col sm={{ span: 12 }} lg={{ span: 5 }}>
                        <h2 className='middle-text'><img src={contact} alt="" /> &nbsp; Contact@funplus.mn</h2>
                    </Col>
                    <Col sm={{ span: 18 }} lg={{ span: 9 }}>
                        <h2 className='middle-text' align="right">
                            <GrMap size={40} />
                            {
                                Contact["ContctLocation"]
                            }
                        </h2>
                    </Col>
                </Row>
            </div>
            <div align="center">
                <div className='Horzintal'>
                    <hr />
                </div>
            </div>
            <Row justify='space-around'>
                <Col span={5}>
                    <h2 className='Fununity'  ><img size={50} src={cIcon} alt="" /> Fun Unity LLC</h2>
                </Col>
                <Row>
                    <Col >
                        <FaFacebookF size={30} color='#456580' />

                    </Col>
                    <Col >
                        <AiFillInstagram size={30} color='#456580' />
                    </Col>
                    <Col>
                        <ImTwitter size={30} color='#456580' />
                    </Col>
                    <Col  >
                        <BsYoutube size={30} color='#456580' />
                    </Col>
                </Row>
            </Row>

        </div>
    )
}

export default Contact