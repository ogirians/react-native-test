import { StyleSheet,Image,ScrollView, Text, View } from 'react-native'
import React from 'react'
import Panda from './assets/img.jpg'

const ComponentCore = () => {
  return (
    <ScrollView>
      <Text>INI JUDUL</Text>
      <View>
        <Text>judul gbr</Text>
        <Image
            source={require("./assets/img.jpg")}
            style={{width: 200,height: 200}} 
        />
        <Image
            source={
                {uri: "https://picsum.photos/300/300"}
            }
            style={{width: 200,height: 200}} 
        />
        <Image
            source={Panda}
            style={{width: 200,height: 200}} 
        />
        <Image
            source={Panda}
            style={{width: 200,height: 200}} 
        />
        <Image
            source={Panda}
            style={{width: 200,height: 200}} 
        />
        <Image
            source={Panda}
            style={{width: 200,height: 200}} 
        />
      </View>
    </ScrollView>
  )
}

export default ComponentCore

const styles = StyleSheet.create({})