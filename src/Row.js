import React from 'react'
import { View } from 'react-native'

export const Row = ({ children, style, ...rest }) => {
    return <View style={{ flexDirection: 'row', ...style }} {...rest}>{children}</View>
}