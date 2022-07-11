import ReactDOM from "react-dom";
import App from './App'
import { AppContainer } from './hook/AppHook';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContainer>,
    document.querySelector("#root")
)