import { ComplexModification, Rule } from '../definitions/definitions'

export const complexModification = (title: string, rules: Array<Rule>): ComplexModification => {
  return {
    title,
    rules,
  }
}
