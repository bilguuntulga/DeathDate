import React from 'react'
import useApp from "../../hook/AppHook"
import './Home.css'

const Home = () => {
    const { Navigation } = useApp();
    return (
        <>
            <div className='home'>
                <div className='background'></div>
                <div className='text'>
                    <h1>
                        {
                            Navigation["Order"]
                        }
                    </h1>
                </div>

            </div>
        </>
    )
}

export default Home