import {Source} from "../../types";
import {pipe} from "../utils/pipe";
import {map} from "./map";
import {tap} from "../utils/tap";

/**
 * withPrevious
 * ------------
 *
 * Keeps a buffer of 1 and puts the previous value with current in an array.
 * Third element is a boolean that tells if there is a previous value, to
 * distinguish from undefined.
 *
 */
export const withPrevious = <T>(source$: Source<T>) => {
    let hasPrevious = false;
    // TODO: on end need to clean the reference
    let previous: T | undefined;
    return pipe(
        source$,
        map((x) => [x, previous, hasPrevious] as const),
        tap(([x]) => {
            previous = x;
            hasPrevious = true;
        }),
    );
};
