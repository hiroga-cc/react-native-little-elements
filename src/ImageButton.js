import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export const ImageButton = ({ image, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={{ ...style }}
        source={image}
      />
    </TouchableOpacity>
  )
}