import Tone from "tone";
import store from "../store/index";
import {equals} from "ramda";
import watch from "redux-watch";

const keys = [];
const map = {
    ...store.getState().tracks.reduce((acc, track) => {
        track.stems.forEach(stem => {
            if (stem !== "off") {
                keys.push(stem);
                acc[stem] = `${process.env.PUBLIC_URL}/audio/${stem}.mp3`;
            }
        });
        return acc;
    }, {})
};

const players = new Tone.Players(map).toMaster();

keys.forEach(key => {
    const player = players.get(key);
    player.volume.value = -96;
    player.loop = true;
});

const listen = (key, fn) =>
    store.subscribe(watch(store.getState, key, equals)(fn));

store.getState().tracks.forEach((track, i) => {
    listen(`tracks.${i}.activeStem`, (value, oldValue) => {
        if (oldValue !== 0) {
            players.get(`${track.name}-0${oldValue}`).volume.rampTo(-96, 1, Tone.now() + 0.5);
        }
        if (value !== 0) {
            players.get(`${track.name}-0${value}`).volume.rampTo(0, 1);
        }
    });
});

listen("playing", (isPlaying) => {
    if (isPlaying) {
        keys.forEach(key => {
            const player = players.get(key);
            player.start(0);
        });
    } else {
        store.dispatch.updateCurrentTime(0);
        players.stopAll(0);
    }
});
