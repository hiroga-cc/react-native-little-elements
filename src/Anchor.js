import React, { Component } from 'react'
import { Linking, TouchableOpacity } from 'react-native'

export const Anchor = (props) => {

  _handlePress = () => {
    if (this.props.href !== undefined && this.props.href.length != 0) {
      Linking.openURL(this.props.href)
    }
    this.props.onPress && this.props.onPress()
  }

  return (
    <TouchableOpacity {...this.props} onPress={this._handlePress}>
      {this.props.children}
    </TouchableOpacity>
  )
}