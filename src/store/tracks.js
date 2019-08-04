import {action} from "easy-peasy";
import config from "../data/config";
import uniqueRandom from "unique-random";

export default {
    activeTrack : -1,
    animating   : false,
    tracks      : [
        ...config.instruments.map(inst =>
            ({
                name       : inst,
                activeStem : 0,
                stems      : Array(config.noStems + 1)
                    .fill(0)
                    .map(((x, stemNumber) =>
                        stemNumber > 0 ? `${inst}-0${stemNumber}` : `off`))
            }))
    ],
    setAnimating : action((state, isAnimating) => {
        state.animating = isAnimating;
    }),
    setActiveTrack : action((state, index) => {
        state.activeTrack = index;
    }),
    setActiveStem : action((state, payload) => {
        state.tracks[payload.track].activeStem = payload.stem;
    }),
    randTracks : action(state => {
        state.tracks.forEach(track => {
            track.activeStem = parseInt(Math.random() * track.stems.length, 10);
        });
    })
};
