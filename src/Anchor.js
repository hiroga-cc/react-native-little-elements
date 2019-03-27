import React, { Component } from 'react'
import { Linking, TouchableOpacity } from 'react-native'

export const Anchor = (props) => {

  _handlePress = () => {
    if (props.href !== undefined && props.href.length != 0) {
      Linking.openURL(props.href)
    }
    props.onPress && props.onPress()
  }

  return (
    <TouchableOpacity {...props} onPress={this._handlePress}>
      {props.children}
    </TouchableOpacity>
  )
}
