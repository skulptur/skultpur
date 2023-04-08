import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorSchemeProvider, DEFAULT_THEME, MantineProvider, MantineTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { Spotlight } from '@/components/Spotlight'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { AppContainer } from '@/components/AppContainer'
import { hexToRgb, contrast, saturate, invert, darken, rgbToHex, formatHex, RgbColor, randomRgb} from 'color-supreme'


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
            
              colors: modifyThemeColors(DEFAULT_THEME.colors, (rgbColor) => contrast(rgbColor, -50)),
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
