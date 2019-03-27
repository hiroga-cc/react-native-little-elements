import React from 'react'
import { View } from 'react-native'

export const VCenter = ({ children, style, ...rest }) => {
  return <View style={{ justifyContent: 'center', ...style }} {...rest}>{children}</View>
}

export const HCenter = ({ children, style, ...rest }) => {
  return <View style={{ alignItems: 'center', ...style }} {...rest}>{children}</View>
}

export const VHCenter = ({ children, style, ...rest }) => {
  return <View style={{ alignItems: 'center', justifyContent: 'center', ...style }} {...rest}>{children}</View>
}