import {createStore, action} from "easy-peasy";
import config from "../data/config";

const findActive = stems =>
    stems.find(stem =>
        stem.active);

const findNewActive = (stems, index) =>
    stems.find(stem =>
        stem.index === index);

export default createStore({
    activeTrack : -1,
    tracks : [
        ...config.instruments.map((inst, i) => ({
            name  : inst,
            index : i,
            stems : Array(config.noStems)
                .fill(0)
                .map(((x, i) => ({
                    file: `drum-0${i}.mp3`,
                    active: i === 0,
                    index : i
                })))
        }))
    ],
    setActiveTrack : action((state, index) => {
        state.activeTrack = index;
    }),
    setActiveStem: action(((state, payload) => {
        const {stems} = state.tracks[payload.track];
        const currentActive = findActive(stems);
        const newActive = findNewActive(stems, payload.stem);

        currentActive.active = false;
        newActive.active = true;
    }))
});
