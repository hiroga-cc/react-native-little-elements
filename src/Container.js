import React from 'react'
import { View } from 'react-native'

export const Container = ({ children, style, ...rest }) => {
  return <View style={{ flex: 1, ...style }} {...rest}>{children}</View>
}