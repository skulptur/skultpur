import internalFromPromise from 'callbag-from-promise';
import {share} from "../operators/share";

/**
 * fromPromise
 * --------------
 *
 * Create stream from a Promise.
 *
 * ```typescript
 *     import { fromPromise } from 'reactive-fns'
 *
 *     const promiseResolved$ = fromPromise(Promise.resolve([0, 1, 2])
 * ```
 */
export const fromPromise: typeof internalFromPromise = (...args) => share(internalFromPromise(...args))