import { VariableIfCondition } from '../definitions/condition'
import { SetVariable } from '../definitions/toEvent'

const createVariableSetter = (
  variableName: string,
  description?: string
): ((value: number) => SetVariable) => {
  return (value) => ({
    set_variable: {
      name: variableName,
      value,
      description,
    },
  })
}

const createVariableIf = (variableName: string, isValue: boolean, description?: string) => {
  return (value: number): VariableIfCondition => {
    return {
      type: isValue ? 'variable_if' : 'variable_unless',
      name: variableName,
      value,
      description,
    }
  }
}


export const createVariable = (variableName: string, description?: string) => {
  return {
    setValue: createVariableSetter(variableName, description),
    isValue: createVariableIf(variableName, true),
    isNotValue: createVariableIf(variableName, false),
  }
}

export const createBoolean = (variableName: string, description?: string) => {
  const mode = createVariable(variableName, description)
  const setTrue = mode.setValue(1)
  const setFalse = mode.setValue(0)
  const isTrue = mode.isValue(1)
  const isFalse = mode.isValue(0)

  return {
    isTrue,
    isFalse,
    setTrue,
    setFalse,
  }
}
