import React, {useRef, useEffect, useState} from "react";
import {useStoreActions, useStoreState} from "easy-peasy";
import Stem from "./Stem";
import anime from "animejs";

const ifString = string => bool =>
    bool ? string : "";

const ifActive = ifString("active");
const ifUp     = ifString("up");
const ifDown   = ifString("down");

export default props => {
    const setTrack   = useStoreActions(actions => actions.setActiveTrack);
    const setStem    = useStoreActions(actions => actions.setActiveStem);
    const className  = `track ${ifActive(props.active)} ${ifUp(props.activeStem > 0)} ${ifDown(props.activeStem < props.stems.length - 1)}`;
    const stemsEl    = useRef();

    useEffect(() => {
        if (props.active) {
            return;
        }
        const segment = stemsEl.current.scrollHeight / props.stems.length;
        const toPx    = parseInt(segment * props.activeStem);
        const state   = {y: stemsEl.current.scrollTop};
        const animRef = anime({
            targets  : state,
            y        : toPx,
            duration : 1000,
            update   : () => {
                stemsEl.current.scrollTo(0, state.y);
            }
        });

        return () => {
            stemsEl.current.classList.remove("animating");
            animRef.pause();
        };
    }, [props.activeStem]);

    const onScroll   = e => {
        const track = props.index;
        const segment = stemsEl.current.scrollHeight / props.stems.length;
        const stem    = parseInt(Math.round(stemsEl.current.scrollTop / segment));

        if (stem !== props.activeStem) {
            setStem({track, stem});
        }
    };

    return (
        <div
            className={className}
            onClick={e => {
                setTrack(props.active ? -1 : props.index);
                e.stopPropagation();
            }}
            onScroll={onScroll}
        >
            <div className="stems" ref={stemsEl}>
                {props.stems.map((stem, i) => (
                    <Stem
                        key={`stem-${props.index}-${i}`}
                        track={props.index}
                        index={i}
                        file={stem.file}
                    />
                ))}
            </div>
        </div>
    );
};
