import React from "react";
import {prop} from "ramda";
import {useStore, useActions} from 'easy-peasy'
//import Track from "./Track";
const Stem = props => {
    const setActiveTrack = useActions(prop("setActiveTrack"));

    return (
        <button className="stem" onClick={e => {
            //setActiveTrack({track: props.track, stem : props.index});
            setActiveTrack(props.track);
        }}>
            {props.expanded ? (
                props.stems.map((stem, i) => (
                    i === props.index ? "" : (
                        <div className="stem-expanded" key={`exp-${i}`}>
                            {console.log(i)}
                            {i}
                        </div>
                    )
                ))
            ) : ""}
            {props.index}
        </button>
    );
};

const Track = props => {
    const stem = props.stems.find(stem => stem.active);
    return (
        <div className={`track ${props.active ? "expand" : ""}`}>
            <Stem
                track={props.index}
                index={stem.index}
                active={stem.active}
                expanded={props.active}
                stems={props.stems}
            />
        </div>
    );
};

export default props => {
    const activeTrack = useStore(store => store.activeTrack);
    return (
        <div className="tracks">
            {props.tracks.map((track, i) => (
                <Track
                    key={`track-${i}`}
                    active={activeTrack === i}
                    name={track.name}
                    index={track.index}
                    stems={track.stems}
                />
            ))}
        </div>
    );
};
