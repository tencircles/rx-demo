import Tone from "tone";
import React, {useCallback} from "react";
import {prop, pipe} from "ramda";
import {useStoreActions, useStoreState} from "easy-peasy";

window.Tone = Tone;

export default props => {
    const togglePlaying = useStoreActions(prop(`togglePlaying`));
    const currentTime   = useStoreState(prop(`currentTime`));
    const duration      = useStoreState(prop(`duration`));
    const playing       = useStoreState(prop(`playing`));
    const onClick       = useCallback(pipe(Tone.start, togglePlaying), []);

    return (
        <div className="transport">
            <button className={`play-button ${playing ? `stop` : ``}`} onClick={onClick}></button>
        </div>
    );
};
