import Tone from "tone";
import React from "react";
import Tracks from "./Tracks";
import Transport from "./Transport";
import {useStoreActions, useStoreState} from "easy-peasy";

export default props => {
    const randomize = useStoreActions(actions => actions.randTracks);
    const play = useStoreActions(actions => actions.togglePlaying);
    const playing = useStoreState(state => state.playing);
    return (
        <div className="main">
            <Tracks />
            <button onClick={() => {
                Tone.start();
                randomize();
                if (!playing) {
                    play();
                }
            }} className="randomize-btn"></button>
            <Transport />
        </div>
    );
};
