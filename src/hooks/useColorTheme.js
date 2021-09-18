import {useColorScheme} from 'react-native'

import Colors from './colors'

export const useThemeColor = (props, colorName) => {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  } else {
    return Colors[theme][colorName]
  }
}
