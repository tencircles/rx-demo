import React, {useEffect} from "react";
import {useStoreState, useStoreActions} from "easy-peasy";
import Track from "./Track";
import anime from "animejs";

export default props => {
    const tracks       = useStoreState(state => state.tracks);
    const activeTrack  = useStoreState(state => state.activeTrack);
    const isAnimating  = useStoreState(state => state.animating);
    const setAnimating = useStoreActions(actions => actions.setAnimating);

    return (
        <div
            className="tracks"
        >
            {tracks.map((track, i) => (
                <Track
                    key={`track-${i}`}
                    index={i}
                    activeStem={track.activeStem}
                    active={activeTrack === i}
                    name={track.name}
                    stems={track.stems}
                />
            ))}
        </div>
    );
};
