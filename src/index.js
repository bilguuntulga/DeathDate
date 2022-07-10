import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { AppContainer } from './hook/AppHook';


ReactDOM.render(
    <BrowserRouter>
        <AppContainer>
            <App />
        </AppContainer>
    </BrowserRouter>,
    document.querySelector("#root")
)