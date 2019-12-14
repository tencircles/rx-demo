import Tone from "tone";
import store from "../store/index";
import {equals} from "ramda";
import watch from "redux-watch";
import {numToString} from "../util";

const VOCALS     = `${process.env.PUBLIC_URL}/audio/vocals.mp3`;
const MIN_VOL    = -96;
const MAX_VOL    = -6;
const FADE_S     = 1;
const FADE_DELAY = 0.1;

const stems = [];
const map   = {
    ...store.getState().tracks.reduce((acc, track) => {
        track.stems.forEach(stem => {
            if (stem !== `off`) {
                stems.push(stem);
                acc[stem] = `${process.env.PUBLIC_URL}/audio/${stem}.mp3`;
            }
        });

        return acc;
    }, {})
};

const onload = () => {
    console.log(`is ready`);
    store.getActions().setReady();
};

map.vocals = VOCALS;

const players = new Tone.Players(map, onload).toMaster();

stems.forEach(key => {
    const player        = players.get(key);
    player.volume.value = -96;
    player.loop         = true;
});

players.get(`vocals`).loop = true;

const listen = (key, fn) =>
    store.subscribe(watch(store.getState, key, equals)(fn));

store.getState().tracks.forEach((track, i) => {
    listen(`tracks.${i}.activeStem`, (value, oldValue) => {
        if (oldValue !== 0) {
            let playingTrack = `${track.name}-${numToString(oldValue)}`;
            players.get(playingTrack).volume.rampTo(MIN_VOL, FADE_S, Tone.now() + FADE_DELAY);
        }
        if (value !== 0) {
            let vol = MAX_VOL;
            if (value > 5) {
                vol -= 3;
            }
            let playingTrack = `${track.name}-${numToString(value)}`;
            players.get(playingTrack).volume.rampTo(vol, FADE_S);
        }
    });
});

Tone.Master.volume.value = MIN_VOL;
listen(`playing`, isPlaying => {
    if (isPlaying) {
        Tone.Master.volume.rampTo(MAX_VOL, FADE_S);
        stems.forEach(key => {
            players.get(key).start(0);
        });
        players.get(`vocals`).start(0);
    } else {
        Tone.Master.volume.rampTo(MIN_VOL, FADE_S);
        store.dispatch.updateCurrentTime(0);
        players.stopAll(0);
    }
});
