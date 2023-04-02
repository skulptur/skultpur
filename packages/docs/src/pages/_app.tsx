import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { Spotlight } from '@/components/Spotlight'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { AppContainer } from '@/components/AppContainer'

const queryClient = new QueryClient()

export type ColorScheme = 'dark' | 'light'

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  
  return <>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
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
