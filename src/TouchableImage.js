import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

export const TouchableImageOpacity = (props) => {
  const { onPress, ...rest } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Image  {...rest} />
    </TouchableOpacity>
  )
}