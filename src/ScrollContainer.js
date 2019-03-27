import React from 'react'
import { ScrollView } from 'react-native'

export const ScrollContainer = ({ children, contentContainerStyle, style, ...rest }) => {
  // in ScrollView, alingment for children is defined by contentStyle, not style.
  return <ScrollView contentContainerStyle={{ ...contentContainerStyle, }} style={{ backgroundColor: "white", flex: 1, ...style }} {...rest}>{children}</ScrollView>
}