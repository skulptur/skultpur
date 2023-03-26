import { VariableIfCondition } from './condition'
import { ConsumerKey, Modifier, PointingButton, StickyModifier } from './keyCode'
import { Switch } from './definitions'
import { KeyCode } from './keyCode'

export type ToEventOptions = {
  lazy?: boolean // Lazy modifier flag
  repeat?: boolean // Key repeat flag
  halt?: boolean // A flag for to_after_key_up
  hold_down_milliseconds?: number // Interval of key_down and key_up when these events are sent at the same time
}

type ToEventBase<T> = T & {
  modifiers?: Array<Modifier> // Modifiers which are post with the event
} & ToEventOptions

export type ToKeyCodeEvent = ToEventBase<{
  key_code: KeyCode
}>

export type ToConsumerKeyCodeEvent = ToEventBase<{
  consumer_key_code: ConsumerKey
}>

export type ToPointingButtonEvent = ToEventBase<{
  pointing_button: PointingButton
}>

export type ToShellCommandEvent = ToEventBase<{
  shell_command: string
}>

export type ToSelectInputSourceEvent = ToEventBase<{
  select_input_source: {
    language?: string // The language regex such as "^en$", "^fr$"
    input_source_id?: string // The input source id regex such as "^com\\.apple\\.keylayout\\.US$"
    input_mode_id?: string // The input mode id regex such as "^com\\.apple\\.inputmethod\\.Japanese\\.Hiragana$"
  }
}>

export type SetVariable = {
  set_variable: Omit<VariableIfCondition, 'type'>
}
export type ToSetVariableEvent = ToEventBase<SetVariable>
// Speed and scroll direction depend on System Preferences > Mouse configuration

export type ToMouseKeyEvent = ToEventBase<{
  mouse_key: {
    x?: number // Move left (x < 0) or right (x > 0)
    y?: number // Move up (y < 0) or down (y > 0)
    vertical_wheel?: number // Scroll up (vertical_wheel < 0) or down (vertical_wheel > 0)
    horizontal_wheel?: number // Scroll left (horizontal_wheel > 0) or right (horizontal_wheel < 0)
    speed_multiplier?: number // Multiply mouse keys speed while this key is hold down
  }
}>

export type ToEventStickyModifier = ToEventBase<{
  // TODO: this type should only have 1 modifier key, but currently accepts any number
  sticky_modifier: Record<StickyModifier, Switch>
}>

export type SoftwareFunctionDoubleClickEvent = {
  cg_event_double_click: {
    button: number
  }
}

export type SoftwareFunctionSetMouseCursorPosition = {
  set_mouse_cursor_position: {
    x: number | string // use absolute value or percentage eg "50%"
    y: number | string // use absolute value or percentage eg "50%"
    screen?: number // The screen index of the new mouse cursor origin
  }
}

export type SoftwareFunctionPowerManagementSystemSleep = {
  iokit_power_management_sleep_system: {
    delay_milliseconds?: number
  }
}

export type ToSoftwareFunctionEvent = ToEventBase<{
  software_function:
    | SoftwareFunctionDoubleClickEvent
    | SoftwareFunctionSetMouseCursorPosition
    | SoftwareFunctionPowerManagementSystemSleep
}>

export type ToEvent =
  | ToKeyCodeEvent
  | ToConsumerKeyCodeEvent
  | ToPointingButtonEvent
  | ToShellCommandEvent
  | ToSelectInputSourceEvent
  | ToSetVariableEvent
  | ToMouseKeyEvent
  | ToEventStickyModifier
  | ToSoftwareFunctionEvent
