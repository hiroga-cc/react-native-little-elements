import React from 'react'
import { View } from 'react-native'

export const Jumbo = ({ children, style, ...rest }) => {
    return <View style={{ height: 300, ...style }} {...rest}>{children}</View>
}