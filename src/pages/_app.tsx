import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"


function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default App