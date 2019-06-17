import React from "react";
import {useStoreActions} from 'easy-peasy';

export default () => {
    const setScreen = useStoreActions(actions => actions.updateScreen);
    return (
        <div className="menu">
            <button onClick={() => setScreen("/about")} className="menu-link">About</button>
        </div>
    );
};
