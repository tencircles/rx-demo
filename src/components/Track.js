import React, {useRef, useEffect, useState, useCallback} from "react";
import {useStoreActions, useStoreState} from "easy-peasy";
import Stem from "./Stem";
import anime from "animejs";

export default props => {
    const setTrack     = useStoreActions(actions => actions.setActiveTrack);
    const setStem      = useStoreActions(actions => actions.setActiveStem);
    const setAnimating = useStoreActions(actions => actions.setAnimating);
    const isAnimating  = useStoreState(state => state.animating);
    const stemsEl      = useRef();
    /* const onScroll     = useCallback(e => {
        const track   = props.index;
        const segment = stemsEl.current.scrollHeight / props.stems.length;
        const stem    = parseInt(Math.round(stemsEl.current.scrollTop / segment), 10);

        if (stem !== props.activeStem) {
            setStem({track, stem});
        }
    }, [props.index]); */

    useEffect(() => {
        let animRef = null;
        if (isAnimating) {
            console.log(props.index, `animating`);
            const segment = stemsEl.current.scrollHeight / props.stems.length;
            const toPx    = parseInt(segment * props.activeStem, 10);
            animRef       = anime({
                targets   : stemsEl.current,
                scrollTop : toPx,
                duration  : 1000,
                complete () {
                    console.log(`removed active`);
                    /* stemsEl.current.classList.remove(`active`); */
                    setAnimating(false);
                }
            });
            /* stemsEl.current.classList.add(`active`); */
        }

        return () => {
            if (animRef) {
                console.log(`was killed`);
                /* stemsEl.current.classList.remove(`active`); */
                animRef.pause();
            }
        };
    }, [props.activeStem]);

    return (
        <div className="track">
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
