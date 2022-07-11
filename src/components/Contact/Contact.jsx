import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import CIcon from '../../assets/C.png';
import useApp from "../../hook/AppHook";
import PhoneIcon from '../../assets/Phone-Icon.png';
import ContactIcon from '../../assets/Contact.png';
import MapIcon from '../../assets/Map-Icon.png';
import "./Contact.css";

const Contact = () => {
    const { Contact } = useApp();

    return (
        <div className="contact-container">
            <h1 id="contact" className="contact-info">{Contact["ContactTitle"]}</h1>
            <div className="contact">
                <p><img src={PhoneIcon} alt="Phone: " /> +976 76002001</p>
                <p><img src={ContactIcon} alt="Contact: " />Contact@funplus.mn</p>
                <p><img src={MapIcon} alt="Location: " />{Contact["ContctLocation"]}</p>
            </div>
            <hr />
            <div className="socials">
                <h2><img size={50} src={CIcon} alt="" /> Fun Unity LLC</h2>
                <div>
                    <FaFacebookF size={30} color='#456580' />
                    <AiFillInstagram size={30} color='#456580' />
                    <ImTwitter size={30} color='#456580' />
                    <BsYoutube size={30} color='#456580' />
                </div>
            </div>
        </div>
    )
}

export default Contact