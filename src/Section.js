import React from 'react'
import { View } from 'react-native'

export const Section = ({ children, style, ...rest }) => {
    return (
        <View style={{ padding: 20, ...style }} {...rest}>
            {children}
        </View>
    )
}