import { withPrevious } from './withPrevious';
import {Source} from "../../types";
import {pipe} from "../utils/pipe";
import {filter} from "./filter";
import {map} from "./map";

export const isEqual = (a: unknown, b: unknown) => a === b;

/**
 * skipRepeats
 * -----------
 *
 * Skips consecutive values that pass the given predicate (defaults to a === b).
 *
 */
export const skipRepeats = (isRepeat = isEqual) => <T>(source$: Source<T>) => {
    return pipe(
        source$,
        withPrevious,
        filter(([current, previous, hasPrevious]) => {
            return !(hasPrevious && isRepeat(current, previous));
        }),
        map(([x]) => x),
    );
};
