import React from "react";
import Header from "./Header";
import Main from "./Main";
import About from "./About";
import {useStoreActions, useStoreState} from "easy-peasy";

const Screens = {
    "/"      : Main,
    "/about" : About
};

export default props => {
    const set    = useStoreActions(actions => actions.setActiveTrack);
    const screen = useStoreState(state => state.screen);

    return (
        <div className="app" onClick={e => set(-1)}>
            <Header />
            {React.createElement(Screens[screen])}
        </div>
    );
};
