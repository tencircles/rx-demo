import {action} from "easy-peasy";

export default {
    screen       : `/`,
    updateScreen : action((state, screen) => {
        state.screen = screen;
    })
};
