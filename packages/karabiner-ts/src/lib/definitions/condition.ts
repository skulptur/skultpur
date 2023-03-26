import { KeyboardType } from './definitions'

// CONDITIONS
type FrontmostApplicationCondition = {
  type: 'frontmost_application_if' | 'frontmost_application_unless'
  bundle_identifiers?: Array<string>
  file_paths?: Array<string>
  description?: string
}
type DeviceIdentifier = {
  // these keys are joined by "and"... device will have to match all specified keys
  vendor_id?: number
  product_id?: number
  location_id?: number
  is_keyboard?: boolean
  is_pointing_device?: boolean
  is_touch_bar?: boolean
}
type DeviceCondition = {
  type: 'device_if' | 'device_unless'
  identifiers: Array<DeviceIdentifier> // multiple devices are joined by "or"
  description?: string
}
type KeyboardTypeCondition = {
  type: 'keyboard_type_if' | 'keyboard_type_unless'
  keyboard_types: Array<KeyboardType>
}
type InputSource = {
  language?: string // The language regex such as "^en$", "^ja$"
  input_source_id?: string // The input source id regex such as "^com\\.apple\\.keylayout\\.US$"
  input_mode_id?: string // The input mode id regex such as "^com\\.apple\\.inputmethod\\.Japanese\\.Hiragana$"
}
type InputSourceCondition = {
  type: 'input_source_if' | 'input_source_unless'
  input_sources: Array<InputSource>
  description: string
}
export type VariableIfCondition = {
  type: 'variable_if' | 'variable_unless'
  name: string
  value: number // can it also be string, boolean??
  description?: string // A human-readable comment
}

export type Condition =
  | FrontmostApplicationCondition
  | DeviceCondition
  | KeyboardTypeCondition
  | InputSourceCondition
  | VariableIfCondition
