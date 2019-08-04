import React, {useCallback} from "react";
import Menu from "./Menu";
import {useStoreActions} from "easy-peasy";

export default props => {
    const setScreen = useStoreActions(actions => actions.updateScreen);
    const onClick   = useCallback(() => setScreen(`/`));

    return (
        <header className="app-header">
            <div className="title-box">
                <h1 onClick={onClick}>Remi</h1>
            </div>
            <hr/>
            <hr/>
            <hr/>
            <Menu />
        </header>
    );
};
