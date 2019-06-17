import React from "react";
import Menu from "./Menu";
import { useStoreActions } from "easy-peasy";

export default props => {
    const setScreen = useStoreActions(actions => actions.updateScreen);
    return (
        <header className="app-header">
            <div className="title-box">
                <h1 onClick={() => setScreen("/")}>Remi(X)</h1>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <Menu />
        </header>
    );
};
