import {action} from "easy-peasy";
import {over, lensProp, pipe, assoc, flip, __, not} from "ramda";

export const numToString = n =>
    n < 10 ? `0${n}` : n;

export const setKeyTo = pipe(
    assoc,
    flip,
    action
);

export const setKey = pipe(
    assoc,
    action
);

export const toggleKey = pipe(
    lensProp,
    over(__, not),
    action
);
