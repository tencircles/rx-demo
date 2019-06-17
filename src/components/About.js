import React from "react";
import {useStoreState} from "easy-peasy";

export default props => {
    const copy = useStoreState(state => state.copy.about);
    return (
        <div className="about">
            <p>{copy.p1}</p>
            <p>{copy.p2}</p>
        </div>
    );
};
