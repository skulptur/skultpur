import internalFromIter from 'callbag-from-iter';
import {share} from "../operators/share";

/**
 * fromIterable
 * --------------
 *
 * Convert an Iterable or Iterator to a pullable source (only send data when requested).
 *
 */
export const fromIter: typeof internalFromIter = (...args) => share(internalFromIter(...args))