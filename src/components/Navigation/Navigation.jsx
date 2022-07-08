/* eslint-disable no-restricted-globals */
import * as React from "react";
import GlobalIcon from '../../assets/Global.png'
import useApp from "../../hook/AppHook"
import './navigation.css'
import 'antd/dist/antd.css';
import FunPlus from '../../assets/PunPlus.png'

export const Navigation = (props) => {

    const { lang, setLang, Navigation } = useApp();

    return (
        <>
            <nav class="navbar">
                <div class="logo"><img src={FunPlus} alt="Logo"></img></div>
                <ul class="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <div class="menu">
                        <li><a href="/">
                            {
                                Navigation["HomePage"]
                            }
                        </a></li>
                        <li><a href="#about">
                            {
                                Navigation["About"]
                            }
                        </a></li>
                        <li class="services">
                            <a href="#service">
                                {
                                    Navigation["Service"]
                                }
                            </a>
                        </li>
                        <li><a href="#partner">
                            {
                                Navigation["Partner"]
                            }
                        </a></li>
                        <li><a href="#contact">
                            {
                                Navigation["Contact"]
                            }
                        </a></li>
                        <a>
                            <img src={GlobalIcon} onClick={() => {
                                if (lang === "MN"){
                                    setLang("EN");
                                }else{
                                    setLang("MN");
                                }
                            }} alt="" />
                        </a>
                    </div>
                </ul>
            </nav>
        </>
    )
}
export default Navigation
