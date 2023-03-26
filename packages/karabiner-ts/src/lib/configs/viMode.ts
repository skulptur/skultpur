import { ComplexModification } from '../definitions/definitions'

const viMode: ComplexModification = {
  title: 'Vi Mode (rev 5)',
  rules: [
    {
      description: 'Vi Mode [S as Trigger Key]',
      manipulators: [
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'down_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'j',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'down_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'up_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'k',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'up_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'h',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'l',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'fn',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'f',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'fn',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: ['left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'b',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: ['left_option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: ['left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: 'w',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: ['left_option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '0',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['left_control'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: '0',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'a',
              modifiers: ['left_control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '4',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['left_control'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 's',
              },
              {
                key_code: '4',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'e',
              modifiers: ['left_control'],
            },
          ],
        },
      ],
    },
    {
      description: 'Vi Mode [D as Trigger Key]',
      manipulators: [
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'down_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'j',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'down_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'up_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'k',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'up_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'h',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'l',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'f',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'fn',
              modifiers: [],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'f',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'fn',
              modifiers: [],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: ['left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'b',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: ['left_option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: ['left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: 'w',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: ['left_option'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '0',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'a',
              modifiers: ['left_control'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: '0',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'a',
              modifiers: ['left_control'],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '4',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'e',
              modifiers: ['left_control'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'd',
              },
              {
                key_code: '4',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_mode',
                value: 1,
              },
            },
            {
              key_code: 'e',
              modifiers: ['left_control'],
            },
          ],
        },
      ],
    },
    {
      description: 'Vi Visual Mode',
      manipulators: [
        {
          type: 'basic',
          from: {
            key_code: 'j',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'down_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'j',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'down_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'k',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'up_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'k',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'up_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'h',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'h',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'l',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'l',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'b',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'b',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'w',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'w',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '0',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift', 'left_command'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: '0',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'left_arrow',
              modifiers: ['left_shift', 'left_command'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: '4',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift', 'left_command'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: '4',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'right_arrow',
              modifiers: ['left_shift', 'left_command'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'open_bracket',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'up_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'open_bracket',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'up_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
        {
          type: 'basic',
          from: {
            key_code: 'close_bracket',
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              key_code: 'down_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'variable_if',
              name: 'vi_visual_mode',
              value: 1,
            },
          ],
        },
        {
          type: 'basic',
          from: {
            simultaneous: [
              {
                key_code: 'v',
              },
              {
                key_code: 'close_bracket',
              },
            ],
            simultaneous_options: {
              key_down_order: 'strict',
              key_up_order: 'strict_inverse',
              detect_key_down_uninterruptedly: true,
              to_after_key_up: [
                {
                  set_variable: {
                    name: 'vi_visual_mode',
                    value: 0,
                  },
                },
              ],
            },
            modifiers: {
              optional: ['any'],
            },
          },
          to: [
            {
              set_variable: {
                name: 'vi_visual_mode',
                value: 1,
              },
            },
            {
              key_code: 'down_arrow',
              modifiers: ['left_shift', 'left_option'],
            },
          ],
          conditions: [
            {
              type: 'frontmost_application_unless',
              bundle_identifiers: [
                '^com\\.apple\\.Terminal$',
                '^com\\.googlecode\\.iterm2$',
                '^co\\.zeit\\.hyperterm$',
                '^co\\.zeit\\.hyper$',
                '^io\\.alacritty$',
                '^net\\.kovidgoyal\\.kitty$',
                '^org\\.vim\\.',
                '^com\\.qvacua\\.VimR$',
              ],
            },
          ],
        },
      ],
    },
  ],
}
