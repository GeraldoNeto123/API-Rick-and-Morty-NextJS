import type { AppProps } from 'next/app'
// import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '@/styles/globals'
import { FavoriteCharactersProvider } from '@/hooks/useFavoriteCharacters';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoriteCharactersProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </FavoriteCharactersProvider>
  )
}
