import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import cIcon from '../../assets/C.png';
import useApp from "../../hook/AppHook"

const Contact = () => {
    const { Contact } = useApp();

    return (
        <div className="contact-container">
            <h1 id="contact" align="center">{Contact["ContactTitle"]}</h1>
            <div className="contact">
                <p>+976 76002001</p>
                <p>Contact@funplus.mn</p>
                <p>{Contact["ContctLocation"]}</p>
            </div>
            <hr />
            <div className="socials">
                <h2><img size={50} src={cIcon} alt="" /> Fun Unity LLC</h2>
                    <FaFacebookF size={30} color='#456580' />
                    <AiFillInstagram size={30} color='#456580' />
                    <ImTwitter size={30} color='#456580' />
                    <BsYoutube size={30} color='#456580' />
            </div>
        </div>
    )
}

export default Contact