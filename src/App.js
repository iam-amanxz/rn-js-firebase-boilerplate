import React from 'react'
import 'react-native-gesture-handler'
import {StatusBar, useColorScheme} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import Navigation from './navigation'
import AuthProvider from './contexts/AuthProvider'
import SplashScreen from './screens/SplashScreen'
import {SPLASH_DELAY} from './config'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(false)
    }, SPLASH_DELAY)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {loading ? (
        <SplashScreen />
      ) : (
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      )}
    </SafeAreaProvider>
  )
}

export default App
