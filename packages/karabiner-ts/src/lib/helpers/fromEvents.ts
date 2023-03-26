import { FromEventOptions, FromKeyCodeEvent, FromModifiers } from '../definitions/fromEvent'
import { Any, KeyCode, Modifier } from '../definitions/keyCode'
import castArray from 'lodash.castarray'

// Todo: not sure it makes sense to have two helpers like this. Maybe a modifiers function that has both built in
export const optional = (modifiers: Array<Modifier | Any> | Modifier | Any) => {
  return {
    optional: castArray(modifiers),
  }
}

export const mandatory = (modifiers: Array<Modifier | Any> | Modifier | Any) => {
  return {
    mandatory: castArray(modifiers),
  }
}

type SingleOrMultipleModifiers = Array<Modifier | Any> | Modifier | Any

export const modifiers = (mandatory: SingleOrMultipleModifiers | undefined = undefined, optional: SingleOrMultipleModifiers | undefined = undefined) => {

  return {
    mandatory: mandatory ? castArray(mandatory) : [],
    optional: optional ? castArray(optional) : [],
  }
}


export const fromModifiers = (
  mandatory: Array<Modifier | Any>,
  optional?: Array<Modifier | Any>
) => {
  return {
    mandatory,
    optional,
  }
}

export const fromKeyCodeEvent = (
  keyCode: KeyCode,
  modifiers: FromModifiers = {},
  options: FromEventOptions = {}
): FromKeyCodeEvent => {
  return {
    key_code: keyCode,
    modifiers,
    ...options,
  }
}
