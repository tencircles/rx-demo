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
    const ready         = useStoreState(prop(`ready`));
    const setAnimating  = useStoreActions(actions => actions.setAnimating);
    const onClick       = useCallback(pipe(Tone.start, () => setAnimating(true), togglePlaying), []);

    return (
        <div className="transport">
            {ready && <button className={`play-button ${playing ? `stop` : ``}`} onClick={onClick}></button>}
        </div>
    );
};
