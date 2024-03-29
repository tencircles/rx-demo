import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {StoreProvider} from "easy-peasy";
import store from "./store";
import sound from "./sound";
import {register} from "./serviceWorker";

console.log(`Application Starting`);

const root = document.getElementById(`root`);
const jsx  = (
    <StoreProvider store={store}>
        <App />
    </StoreProvider>
);

window.addEventListener(`contextmenu`, e =>
    e.preventDefault());

ReactDOM.render(jsx, root);

window.store = store;

// register();
