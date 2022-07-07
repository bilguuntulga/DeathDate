import ReactDOM from "react-dom";
import App from './App'
import './index.css'
import { AppContainer } from './hook/AppHook';


ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.querySelector("#root")
)