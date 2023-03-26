import { ConsumerKey, KeyCode, Modifier, PointingButton } from '../definitions/keyCode'
import { ToEventTargets } from '../definitions/manipulator'
import {
  ToConsumerKeyCodeEvent,
  ToEvent,
  ToEventOptions,
  ToKeyCodeEvent,
  ToPointingButtonEvent,
  ToShellCommandEvent,
} from '../definitions/toEvent'
import castArray from 'lodash.castarray'

// to event types

export const toKeyCodeEvent = (
  keyCode: KeyCode,
  modifiers?: Array<Modifier>,
  options?: ToEventOptions
): ToKeyCodeEvent => {
  return {
    key_code: keyCode,
    modifiers,
    ...options,
  }
}

export const toConsumerKeyCodeEvent = (
  consumerKey: ConsumerKey,
  modifiers: Array<Modifier> = [],
  options: ToEventOptions = {}
): ToConsumerKeyCodeEvent => {
  return {
    consumer_key_code: consumerKey,
    modifiers,
    ...options,
  }
}

export const toPointingButtonEvent = (
  pointingButton: PointingButton,
  modifiers?: Array<Modifier>,
  options?: ToEventOptions
): ToPointingButtonEvent => {
  return {
    pointing_button: pointingButton,
    modifiers,
    ...options,
  }
}

export const toShellCommandEvent = (
  command: string,
  modifiers?: Array<Modifier>, // TODO: not sure about this
  options?: ToEventOptions // TODO: not sure about this
): ToShellCommandEvent => {
  return {
    shell_command: command,
    modifiers,
    ...options,
  }
}

// ---

export const to = (toEvents: Array<ToEvent> | ToEvent): ToEventTargets => {
  return {
    to: castArray(toEvents),
  }
}

export const toIfAlone = (toEvents: Array<ToEvent> | ToEvent): ToEventTargets => {
  return {
    to_if_alone: castArray(toEvents),
  }
}

export const toIfHeldDown = (toEvents: Array<ToEvent> | ToEvent): ToEventTargets => {
  return {
    to_if_held_down: castArray(toEvents),
  }
}

export const toAfterKeyUp = (toEvents: Array<ToEvent> | ToEvent): ToEventTargets => {
  return {
    to_after_key_up: castArray(toEvents),
  }
}
