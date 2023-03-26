// https://karabiner-elements.pqrs.org/docs/json/

import { Parameters, Manipulator } from './manipulator'

export type Global = {
  check_for_updates_on_startup: boolean
  show_in_menu_bar: boolean
  show_profile_name_in_menu_bar: boolean
}

export type Rule = {
  description: string
  manipulators: Array<Manipulator>
}

export type ComplexModification = {
  title: string
  parameters?: Parameters
  rules: Array<Rule>
}

export type VirtualHidKeyboard = {
  keyboard_type: KeyboardType
  caps_lock_delay_milliseconds: number
}

export type Profile = {
  name: string
  selected: boolean
  simple_modifications?: []
  fn_function_keys?: []
  complex_modifications?: Array<ComplexModification>
  virtual_hid_keyboard?: VirtualHidKeyboard
  devices?: []
  parameters?: {}
}

export type Config = {
  global: Global
  profiles: []
}

export type KeyboardType = 'ansi' | 'iso' | 'jis'
export type EventOrderRestriction = 'insensitive' | 'strict' | 'strict_inverse'
export type KeyUpWhen = 'any' | 'all'
export type Switch = 'on' | 'off' | 'toggle'
