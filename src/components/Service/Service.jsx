import Laptop from '../../assets/laptop.svg'
import useApp from "../../hook/AppHook"
import { Zoom, Fade } from 'react-reveal';
import './Service.css'

function Service() {
    const { Services } = useApp();

    return (
        <div className='service-container'>
            <h1 id='service' className='service-title'>{Services["ServicesTittle"]}</h1>
            <div className="row1">
                <Fade left>
                    <div className="square row1-col1">
                        <div>
                            <h2>{Services["ServicesSystem"]}</h2>
                            <p>{Services["servicesSystem"]}</p>
                        </div>
                    </div>
                </Fade>
                <Zoom><img className='laptop row1-col2' src={Laptop} alt="laptop not found:404" /></Zoom>
                <Fade right>
                    <div className='square row1-col3'>
                        <div>
                            <h2>{Services["ServicesMarketingTitle"]}</h2>
                            <p>{Services["servicesMarketingpackage"]}</p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="row2">
                <Fade left>
                    <div className="square">
                        <div>
                            <h2>{Services["ServicesLoyaltyTitle"]}</h2>
                            <p>{Services["servicesLoyalty"]}</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="square">
                        <div>
                            <h2>{Services["ServicesBrandNewTitle"]}</h2>
                            <p>{Services["servicesBrandNew"]}</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Service;