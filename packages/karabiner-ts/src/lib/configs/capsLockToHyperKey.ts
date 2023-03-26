export const capsLockToHyperKey = {
    "title": "Caps Lock → Hyper Key (⌃⌥⇧⌘) (Caps Lock if alone)",
    "rules": [
        {
            "description": "Caps Lock → Hyper Key (⌃⌥⇧⌘) (Caps Lock if alone)",
            "manipulators": [
                {
                    "from": {
                        "key_code": "caps_lock"
                    },
                    "to": [
                        {
                            "key_code": "left_shift",
                            "modifiers": [
                                "left_command",
                                "left_control",
                                "left_option"
                            ]
                        }
                    ],
                    "to_if_alone": [
                        {
                            "key_code": "caps_lock"
                        }
                    ],
                    "type": "basic"
                }
            ]
        }
    ]
}