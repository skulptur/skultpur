import {always} from "common-fns";
import {Source} from "../../types";
import {map} from "./map";
import {pipe} from "../utils/pipe";

/**
 * map
 * --------------
 *
 * Transforms the contents of the stream to the provided value.
 *
 */
export const mapTo = <T>(value: T) => (source$: Source<any>) => {
    return pipe(source$, map(always(value)));
};
