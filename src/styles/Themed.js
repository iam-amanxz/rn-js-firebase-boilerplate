import React from 'react'
import {Text as DefaultText, View as DefaultView} from 'react-native'

export const Surface = props => {
  const {style, bg, ...otherProps} = props

  return (
    <DefaultView
      style={[{backgroundColor: bg ? bg : 'white'}, style]}
      {...otherProps}
    />
  )
}

export const Typography = props => {
  const {style, weight, color, size, ...otherProps} = props

  return (
    <DefaultText
      style={[
        {
          color,
          fontFamily:
            weight === 'light'
              ? 'RobotoCondensedLight'
              : weight === 'bold'
              ? 'RobotoCondensedBold'
              : 'RobotoCondensedRegular',
          fontSize: size ? size : 16,
        },
        style,
      ]}
      {...otherProps}
    />
  )
}
