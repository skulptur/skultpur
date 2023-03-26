import { Condition } from './condition'
import { FromEvent } from './fromEvent'
import { ToEvent } from './toEvent'

export type BasicParameters = {
  'basic.simultaneous_threshold_milliseconds'?: number
  'basic.to_delayed_action_delay_milliseconds'?: number
  'basic.to_if_alone_timeout_milliseconds'?: number
  'basic.to_if_held_down_threshold_milliseconds'?: number
}

export type ToEventTargets = {
  to?: Array<ToEvent>
  to_if_alone?: Array<ToEvent>
  to_if_held_down?: Array<ToEvent>
  to_after_key_up?: Array<ToEvent>
  to_delayed_action?: {
    to_if_invoked?: Array<ToEvent>
    to_if_canceled?: Array<ToEvent>
  }
}

export type BasicManipulator = {
  type: 'basic'
  description?: string
  from: FromEvent
  conditions?: Array<Condition>
  parameters?: BasicParameters
} & ToEventTargets

type MouseMotionToScrollParameters = { 'mouse_motion_to_scroll.speed'?: number }

export type MouseMotionToScrollManipulator = {
  type: 'mouse_motion_to_scroll'
  from: {
    modifiers?: {
      // Enable mouse_motion_to_scroll if specified modifiers are pressed
      mandatory: []
      optional: []
    }
  }
  conditions?: []
  options?: {
    momentum_scroll_enabled?: boolean
    speed_multiplier?: number
  }
}

export type Parameters = BasicParameters & MouseMotionToScrollParameters

export type Manipulator = BasicManipulator | MouseMotionToScrollManipulator
