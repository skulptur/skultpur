import { Rule } from '../definitions/definitions'
import { Manipulator } from '../definitions/manipulator'

export const rule = (description: string, manipulators: Array<Manipulator>): Rule => {
  return {
    description,
    manipulators,
  }
}
