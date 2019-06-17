import {action} from "easy-peasy";

export default {
    playing       : false,
    togglePlaying : action((state) => {
        state.playing = !state.playing;
    }),
    updateCurrentTime : action((state, newTime) => {
        state.currentTime = newTime;
    }),
    updateDuration : action((state, newDuration) => {
        state.duration = newDuration;
    })
};
