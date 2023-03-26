import { Any, ConsumerKey, Modifier, PointingButton } from './keyCode'
import { ToEvent } from './toEvent'
import { EventOrderRestriction, KeyUpWhen } from './definitions'
import { KeyCode } from './keyCode'

export type Simultaneous =
  | { key_code: KeyCode }
  | { consumer_key_code: ConsumerKey }
  | { pointing_button: PointingButton }
  | { any: KeyCode | ConsumerKey | PointingButton }

export type FromEventOptions = {
  simultaneous?: Array<Simultaneous>
  simultaneous_options?: {
    detect_key_down_uninterruptedly?: boolean // Specify whether key_down detection is interrupted with unrelated events
    key_down_order?: EventOrderRestriction // Restriction of key_down order
    key_up_order?: EventOrderRestriction // Restriction of key_up order
    key_up_when?: KeyUpWhen // When key_up events are posted
    to_after_key_up?: Array<ToEvent>
  }
}

export type FromModifiers = {
  mandatory?: Array<Modifier | Any> // Modifiers which must be pressed
  optional?: Array<Modifier | Any> // Modifiers which can be pressed
}

type FromEventBase<T> = T & {
  modifiers?: FromModifiers
} & FromEventOptions

export type FromKeyCodeEvent = FromEventBase<{ key_code: KeyCode }>
export type FromConsumerKeyCodeEvent = FromEventBase<{ consumer_key_code: ConsumerKey }>
export type FromPointingButtonEvent = FromEventBase<{ pointing_button: PointingButton }>
export type FromAnyEvent = FromEventBase<{
  any: KeyCode | ConsumerKey | PointingButton // careful when using PointingButton as you may lose left click button and system will be unusable
}>

export type FromEvent =
  | FromKeyCodeEvent
  | FromConsumerKeyCodeEvent
  | FromPointingButtonEvent
  | FromAnyEvent
