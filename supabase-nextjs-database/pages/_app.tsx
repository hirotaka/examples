import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import UserProvider from '@/contexts/user'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
