import React from 'react'
import { Text, View } from 'react-native'

export const Hello = (props) => {
  const name = props.name != undefined ? props.name : "hiroga"

  return (
    <View><Text>{`Hello, ${name}!`}</Text></View>
  )
}