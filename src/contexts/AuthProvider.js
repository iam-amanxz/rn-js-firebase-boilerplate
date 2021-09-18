import React from 'react'
import {Text, View} from 'react-native'
import auth from '@react-native-firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return React.useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  function onAuthStateChanged(user) {
    setCurrentUser(user)
    console.log('👱‍♂️ user =====> ', user)
    if (setLoading) setLoading(false)
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  const value = {
    currentUser,
  }

  // Todo
  const Spinner = () => (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Processing Auth State...</Text>
    </View>
  )

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
