import type { AppProps } from 'next/app'
// import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
