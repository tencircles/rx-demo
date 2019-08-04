import Tone from "tone";
import React, {useCallback} from "react";
import Tracks from "./Tracks";
import Transport from "./Transport";
import {useStoreActions, useStoreState} from "easy-peasy";

export default props => {
    const randomize    = useStoreActions(actions => actions.randTracks);
    const play         = useStoreActions(actions => actions.togglePlaying);
    const setAnimating = useStoreActions(actions => actions.setAnimating);
    const playing      = useStoreState(state => state.playing);

    const onClick = useCallback(() => {
        Tone.start();
        setAnimating(true);
        randomize();
        if (!playing) {
            play();
        }
    }, [playing]);

    return (
        <div className="main">
            <Tracks />
            <button onClick={onClick} className="randomize-btn"></button>
            <Transport />
        </div>
    );
};
