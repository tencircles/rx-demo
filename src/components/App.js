import React from "react";
import Tracks from "./Tracks"
import Header from "./Header";
import store from "../store";
import {useStore, StoreProvider} from "easy-peasy";
/*

    - randomizer buttons selects random combination of tracks
    - selection allows you to cusomize
*/

function App (props) {
    const tracks = useStore(state => state.tracks);
    const activeTrack = useStore(state => state.activeTrack);
    return (
        <div className="app">
            <Header />
            <div className="main">
                <Tracks tracks={tracks} activeTrack={activeTrack} />
                <button className="randomize"></button>
            </div>
        </div>
    );
}

function WithStore (props) {
    return (
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    );
}


export default WithStore;
