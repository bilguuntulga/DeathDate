import React from 'react'
import useApp from "../../hook/AppHook"
import { Zoom } from 'react-reveal'
import './Home.css'

const Home = () => {
    const { Navigation } = useApp();
    return (
        <div id="home" className='home-container'>
            <div className='background'></div>
            <div className='text'>
                <Zoom>
                    <h1>{Navigation["Order"]}</h1>
                </Zoom>
            </div>
        </div>
    )
}

export default Home;