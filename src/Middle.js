import React from 'react'
import { View } from 'react-native'

export const Middle = ({ children, style, ...rest }) => {
    return <View style={{ flex: 1, justifyContent: 'center', ...style }} {...rest}>{children}</View>
}