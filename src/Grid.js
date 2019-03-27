import React from 'react'
import { ImageBackground, TouchableOpacity, View } from 'react-native'

export const Grid = ({ children, onPress, style, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 20, ...style }} {...rest}>
            {children}
        </TouchableOpacity>
    )
}

export const GridHeader = props => {
    return (
        <View style={{ marginTop: 15, ...props.style }}>{props.title}</View>
    )
}

export const GridThumbnail = (props) => {
    const { style, source, ...rest } = props
    return (
        <ImageBackground
            source={source}
            style={{ height: 200, width: '100%', ...style, }}
            {...rest}
        />
    )
}
