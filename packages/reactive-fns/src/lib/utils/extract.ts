import {forEach} from "./forEach";
import {Source} from "../../types";

/**
 * extract
 * -------
 *
 * Get the last emitted value if it exists.
 *
 */
export const extract = <T>(source$: Source<T>): T | undefined => {
    let value: T | undefined;

    forEach<T | undefined>((streamValue) => {
        value = streamValue;
    })(source$)(); // dispose right away

    return value;
};
