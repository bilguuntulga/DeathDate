import * as React from "react";
import { useState } from "react";
import useApp from "../../hook/AppHook";
import FunPlus from '../../assets/FunPlusLogo.png';
import GlobalIcon from '../../assets/Global.png';
import MenuIcon from '../../assets/Menu.png';
import './Navigation.css';

function Navigation() {
    const { lang, setLang, Navigation } = useApp();
    const [menuStyle, setMenuStyle] = useState("close-menu");

    function changeMenuStyle() {
        if (menuStyle === "close-menu") {
            setMenuStyle("open-menu");
        } else {
            setMenuStyle("close-menu");
        }
    }

    return (
        <div className="navbar">
            <img className="logo" src={FunPlus} alt="Fun Plus Logo"></img>
            <nav>
                <ul className={menuStyle}>
                    <li>
                        <a href="#home">{Navigation["HomePage"]}</a>
                    </li>
                    <li>
                        <a href="#about">{Navigation["About"]}</a>
                    </li>
                    <li>
                        <a href="#service">{Navigation["Service"]}</a>
                    </li>
                    <li>
                        <a href="#partner">{Navigation["Partner"]}</a>
                    </li>
                    <li>
                        <a href="#contact">{Navigation["Contact"]}</a>
                    </li>
                    <li>
                        <img className="global-icon" src={GlobalIcon} onClick={() => {
                            if (lang === "MN") {
                                setLang("EN");
                            } else {
                                setLang("MN");
                            }
                        }} alt="Global Icon"></img>
                    </li>
                </ul>
            </nav>
            <img className="menu-icon" src={MenuIcon} alt="Menu Icon" onClick={changeMenuStyle} />
        </div>
    )
}

export default Navigation;