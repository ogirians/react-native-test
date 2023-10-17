import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    
      <View style={[styles.container, {flexDirection :'column'}]}>
        <Text style={styles.center}>ini app tengah </Text>
        <Text style={styles.left}>ini app tengah </Text>
        <Text style={styles.right}>ini app tengah </Text>
        <Text style={styles.posisi}>ini app tengah ads </Text>

          <View style={{flex:1, backgroundColor:'red'}}/>
          <View style={{flex:2, backgroundColor:'green'}}/>
          <View style={{flex:3, backgroundColor:'blue'}}/>
            
          {/* <View style={{flex:2}}>
              <Text>asda</Text>
          </View>
          <View style={{flex:3}}>
              <Text>asda</Text>
          </View> */}
      </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    height: 300
  },
  center : {
    textAlign : 'center',
    fontSize : 10,
    fontWeight : 'bold',
    marginTop : 10,
    color : 'red'
  },
  left : {
    textAlign : 'left',
    fontSize : 20,
    fontWeight : 'bold',
    marginTop : 10,
    color: 'blue'
  },
  right : {
    textAlign : 'right',
    fontSize : 30,
    fontWeight : 'bold',
    color : 'green'
  },
  posisi : {
    position:'relative',
    // top : 5,
    left : 50,
    bottom: 15
  }
  
})