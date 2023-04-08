import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorSchemeProvider, DEFAULT_THEME, MantineProvider, MantineTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { Spotlight } from '@/components/Spotlight'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { AppContainer } from '@/components/AppContainer'
import { hexToRgb, mix, tint, analogous, colorDifference , saturate, invert, darken, rgbToHex, formatHex, RgbColor, randomRgb} from 'color-supreme'


// G -> toggle theme grayscale using grayscale
export function modifyThemeColors(themeColors: MantineTheme['colors'], fn: (rgb: RgbColor) => RgbColor): MantineTheme['colors'] {
  console.log(themeColors)
  const colors = { ...themeColors }

  Object.entries(colors).forEach(([key, values]) => {
    colors[key] = values.map((value) => {
      const color = formatHex(rgbToHex(fn(hexToRgb(value)!)))
      
      return color
    })
  })

  return colors
}

console.log(DEFAULT_THEME.colors)



function generateTheme(theme: Record<string, [string, string]>, fn:(c1: RgbColor, c2: RgbColor, ratio: number) => RgbColor): MantineTheme['colors']   {
  const result: MantineTheme['colors'] = {};

  for (const [key, [startColor, endColor]] of Object.entries(theme)) {
    const startRgb = hexToRgb(startColor)!;
    const endRgb = hexToRgb(endColor)!;

    result[key] = [];
    for (let i = 0; i < 10; i++) {
      const ratio = i / 9;
      
      const interpolatedRgb = fn(startRgb, endRgb, ratio);
      const hex = formatHex(rgbToHex(interpolatedRgb))
      result[key].push(hex);
    }
  }

  return result;
}

const testColors = {
  dark: ['#000000', '#111111'],
  gray: ['#f8f9fa', '#212529'],
  red: ['#fff5f5', '#c92a2a'],
  pink: ['#fff0f6', '#a61e4d'],
  grape: ['#f8f0fc', '#862e9c'],
  violet: ['#f3f0ff', '#5f3dc4'],
  indigo: ['#edf2ff', '#364fc7'],
  blue: ['#e7f5ff', '#1864ab'],
  cyan: ['#e3fafc', '#0b7285'],
  teal: ['#e6fcf5', '#087f5b'],
  green: ['#ebfbee', '#2b8a3e'],
  lime: ['#f4fce3', '#5c940d'],
  yellow: ['#fff9db', '#e67700'],
  orange: ['#fff4e6', '#d9480f'],
} as any;


const themeColors = generateTheme(testColors, mix)

const queryClient = new QueryClient()

export type ColorScheme = 'dark' | 'light'

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  
  const tintColor = randomRgb()
  
  return <>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
          theme={{
            colors: themeColors,
              // colors: modifyThemeColors(DEFAULT_THEME.colors, (rgbColor) => colorDifference(rgbColor, 100)),
              colorScheme,
              focusRing: 'never',
            }}
          >
             <Notifications />
              <ModalsProvider>
                <Spotlight>
                  <AppContainer>
                    <Component {...pageProps} />
                  </AppContainer>
                </Spotlight>
              </ModalsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </>
  
}
