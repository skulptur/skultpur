import { ComplexModification } from '../definitions/definitions'

const launcher: ComplexModification = {
  title: 'Personal rules (@tekezo) Launcher Mode v4 (rev 7)',
  rules: [
    {
      description: 'Launcher Mode v4 (rev 7)',
      manipulators: [
        {
          type: 'basic',
          from: {
            key_code: '1',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Xcode.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: '1',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Xcode.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: '3',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Firefox.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: '3',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Firefox.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: '4',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Safari.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: '4',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Safari.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'a',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Activity Monitor.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'a',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Activity Monitor.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'c',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Google Chrome.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'c',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Google Chrome.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'e',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: '~/.local/share/karabiner/bin/vscode.sh',
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'e',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: '~/.local/share/karabiner/bin/vscode.sh',
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Finder.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'f',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Finder.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'i',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Adium.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'i',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Adium.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'm',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Thunderbird.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'm',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Thunderbird.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'q',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Dictionary.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'q',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Dictionary.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 't',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'iTerm.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 't',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'iTerm.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'u',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Skype.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'u',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Skype.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Microsoft Word.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'w',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Microsoft Word.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'x',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Microsoft Excel.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'x',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Microsoft Excel.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'tab',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'mission_control',
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'tab',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              key_code: 'mission_control',
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
        {
          type: 'basic',
          from: {
            key_code: 'spacebar',
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              shell_command: "open -a 'Alfred 3.app'",
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'launcher_mode_v4',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'o',
              },
              {
                key_code: 'spacebar',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'launcher_mode_v4',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              mandatory: [],
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'launcher_mode_v4',
                value: 1,
              },
            },
            {
              shell_command: "open -a 'Alfred 3.app'",
            },
          ],
          parameters: {
            'basic.simultaneous_threshold_milliseconds': 500,
          },
        },
      ],
    },
  ],
}
