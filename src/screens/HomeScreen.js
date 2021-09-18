import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Typography} from '../styles/Themed'

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Typography weight="bold" size={32}>
        Home Screen
      </Typography>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
