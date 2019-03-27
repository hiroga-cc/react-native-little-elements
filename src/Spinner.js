import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Spinner = ({ color, size }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator color={color || '#0000ff'} size={size || 'large'} />
    </View >
  )
}