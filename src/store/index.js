import {createStore, action} from "easy-peasy";
import config from "../data/config";
import copy from "../data/copy";
import screen from "./screen";
import tracks from "./tracks";
import playback from "./playback";

export default createStore({
    ...playback,
    ...config,
    ...copy,
    ...screen,
    ...tracks
});
