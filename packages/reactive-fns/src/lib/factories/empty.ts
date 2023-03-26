// @ts-expect-error
import internalEmpty from 'callbag-empty'
import { Source } from '../../types'

export const empty: Source<never> = internalEmpty
