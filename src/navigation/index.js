import React from 'react'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme as AppDarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useColorScheme} from 'react-native'

import pallette from '../styles/colors'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import {useAuth} from '../contexts/AuthProvider'
import {Route} from '../utils/constants'

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...pallette.light,
  },
}
const DarkTheme = {
  ...AppDarkTheme,
  colors: {
    ...AppDarkTheme.colors,
    ...pallette.dark,
  },
}

const Navigation = () => {
  const scheme = useColorScheme()

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const RootNavigator = () => {
  const {currentUser} = useAuth()

  return currentUser ? <AppStack /> : <AuthStack />
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStack = () => (
  <Stack.Navigator initialRouteName={Route.SIGN_IN}>
    <Stack.Screen name={Route.SIGN_IN} component={SignInScreen} />
    <Stack.Screen name={Route.SIGN_UP} component={SignUpScreen} />
  </Stack.Navigator>
)
const AppStack = () => (
  <Tab.Navigator
    initialRouteName={Route.HOME}
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 55,
      },
    }}>
    <Tab.Screen name={Route.HOME} component={HomeScreen} />
    <Tab.Screen name={Route.SEARCH} component={SearchScreen} />
    <Tab.Screen name={Route.PROFILE} component={ProfileScreen} />
  </Tab.Navigator>
)

export default Navigation
