import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }: any): any => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Movie Detail"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  )
}

export default Home
