import type { AppProps } from 'next/app'
// import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '@/styles/globals'
import { FavoriteCharactersProvider } from '@/hooks/useFavoriteCharacters';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    // Router event handler
    router.events.on("routeChangeStart", startLoading)
    router.events.on("routeChangeComplete", stopLoading)
    return () => {
      router.events.off("routeChangeStart", startLoading)
      router.events.off("routeChangeComplete", stopLoading)
    }
  }, [router.events])
  
  return (
    <FavoriteCharactersProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <Loader isLoading={loading} />
    </FavoriteCharactersProvider>
  )
}
