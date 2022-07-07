import React from 'react'
import './home.css'
import 'antd/dist/antd.css';
import useApp from "../../hook/AppHook"




const Home = () => {
    const { lang, setLang, Navigation } = useApp();
    return (
        <>
            <div className="home">
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