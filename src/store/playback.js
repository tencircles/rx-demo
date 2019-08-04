import {action} from "easy-peasy";

export default {
    playing  : false,
    ready    : false,
    setReady : action(state => {
        state.ready = true;
    }),
    togglePlaying : action(state => {
        state.playing = !state.playing;
        const allOff  = state.tracks.every(track => track.activeStem === 0);
        if (state.playing && allOff) {
            state.tracks.forEach(track => {
                track.activeStem = parseInt(Math.random() * track.stems.length, 10);
            });
        }
    }),
    updateCurrentTime : action((state, newTime) => {
        state.currentTime = newTime;
    }),
    updateDuration : action((state, newDuration) => {
        state.duration = newDuration;
    })
};
