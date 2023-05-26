import type { AppProps } from 'next/app'
import { GlobalStyle } from '@global-styles/theme/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@global-styles/theme/theme'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
