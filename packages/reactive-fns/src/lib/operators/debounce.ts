import internalDebounce from 'callbag-common'

/**
 * debounce
 * --------------
 *
 * Holds incoming values, and emits last one when no new values arrive for given duration.
 *
 */
export const debounce = internalDebounce