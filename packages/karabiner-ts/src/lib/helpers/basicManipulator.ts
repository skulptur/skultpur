import { Condition } from '../definitions/condition'
import { FromEvent } from '../definitions/fromEvent'
import { BasicManipulator, BasicParameters, ToEventTargets } from '../definitions/manipulator'
import castArray from 'lodash.castarray'

export const basicManipulator = (
  fromEvent: FromEvent,
  toEventsTargets: ToEventTargets,
  conditions?: Array<Condition> | Condition,
  parameters?: BasicParameters
): BasicManipulator => {
  return {
    type: 'basic',
    from: fromEvent,
    ...toEventsTargets,
    conditions: conditions ? castArray(conditions) : undefined,
    parameters,
  }
}
