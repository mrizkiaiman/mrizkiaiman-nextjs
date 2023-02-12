import * as React from 'react'
import '../../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = React.useState<boolean>(false)
  const onToggleScreen = () => setDarkMode(!darkMode)

  return (
    <div className={`transition ease-out duration-150 bg-white ${darkMode ? 'dark' : ''}`}>
      <Component {...pageProps} />
    </div>
  )
}
