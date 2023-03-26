import internalFromEvent from 'callbag-from-event';
import {share} from "../operators/share";

/**
 * fromEvent
 * --------------
 *
 * Get data from any event listener.
 *
 */
export const fromEvent: typeof internalFromEvent = (...args) => share(internalFromEvent(...args))