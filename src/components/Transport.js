import Tone from "tone";
import React from "react";
import {useStoreActions, useStoreState} from "easy-peasy";

export default props => {
    const togglePlaying = useStoreActions(actions => actions.togglePlaying);
    const currentTime   = useStoreState(state => state.currentTime);
    const duration      = useStoreState(state => state.duration);
    const playing       = useStoreState(state => state.playing);

    return (
        <div className="transport">
            <button className={`play-button ${playing ? "stop" : ""}`} onClick={() => {
                Tone.start();
                togglePlaying();
            }}></button>
        </div>
    );
};
