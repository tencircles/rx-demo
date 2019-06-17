import React from "react";
import {useStoreState, useStoreActions} from "easy-peasy";
import Track from "./Track";

export default props => {
    const tracks      = useStoreState(state => state.tracks);
    const activeTrack = useStoreState(state => state.activeTrack);

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
