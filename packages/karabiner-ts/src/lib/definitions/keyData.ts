export type Key = {
  category?: string
  label?: string
  data?: Array<KeyData>
  not_to?: boolean
  not_from?: boolean
}

export type KeyData = {
  key_code?: string
  apple_vendor_top_case_key_code?: string
  apple_vendor_keyboard_key_code?: string
  consumer_key_code?: string
  software_function?: SoftwareFunction
  sticky_modifier?: StickyModifierMap
  mouse_key?: MouseKey
  pointing_button?: string
}

export type SoftwareFunction = {
  iokit_power_management_sleep_system?: IokitPowerManagementSleepSystem
  set_mouse_cursor_position?: SetMouseCursorPosition
  cg_event_double_click?: CgEventDoubleClick
}

export type IokitPowerManagementSleepSystem = {}

export type SetMouseCursorPosition = {
  x: any
  y: any
  screen: number
}

export type CgEventDoubleClick = {
  button: number
}

export type StickyModifierMap = {
  fn?: string
  right_command?: string
  right_option?: string
  right_shift?: string
  right_control?: string
  left_command?: string
  left_option?: string
  left_shift?: string
  left_control?: string
}

export type MouseKey = {
  speed_multiplier?: number
  horizontal_wheel?: number
  vertical_wheel?: number
  x?: number
  y?: number
}
