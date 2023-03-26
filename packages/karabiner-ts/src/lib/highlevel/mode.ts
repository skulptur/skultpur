import {KeyCode} from "../definitions/keyCode";
import {FromModifiers} from "../definitions/fromEvent";
import { createBoolean } from "../helpers/createVariable";
import {basicManipulator} from "../helpers/basicManipulator";
import {fromKeyCodeEvent} from "../helpers/fromEvents";
import {to} from "../helpers/toEvents";
import {Condition} from "../definitions/condition";
import castArray from "lodash.castarray";

export const anyMode = createBoolean(`any_mode`)

export const toggleMode = (name: string, toggleKey: KeyCode, modifiers: FromModifiers, onConditions?: Array<Condition> | Condition, offConditions?: Array<Condition> | Condition) => {
    const mode = createBoolean(`${name}_mode`)

    const onConditionsArr = onConditions ? castArray(onConditions) : []
    const offConditionsArr = offConditions ? castArray(offConditions) : []
    const setEmojiModeOn = basicManipulator(fromKeyCodeEvent(toggleKey, modifiers), to([mode.setTrue, anyMode.setTrue]), [mode.isFalse, ...onConditionsArr])
    const setEmojiModeOff = basicManipulator(fromKeyCodeEvent(toggleKey, modifiers), to([mode.setFalse, anyMode.setFalse]), [mode.isTrue, ...offConditionsArr])

    return {
        isOn: mode.isTrue,
        isOff: mode.isFalse,
        manipulators:[
            setEmojiModeOn,
            setEmojiModeOff
        ] as const
    }
}