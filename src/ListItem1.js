import { Text, StyleSheet, Button, View, Alert, Touchable, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'

function coba_alert() {
  const lebar = Dimensions.get("screen").width;
  const tinggi = Dimensions.get("screen").height;
  alert('dimensi : lebar' + lebar + 'tingii : ' + tinggi);
}

export default class ListItem1 extends Component {
state = {
Mobil :  [
    {id:1, nama : 'toyo'},
    {id:2, nama : 'honda'},
    {id:3, nama : 'daihatsu'},
    {id:4, nama : 'nisam'},
    {id:5, nama : 'bmw'}
]
}

klik = (Mobil) => {
    alert('Tampilkan'+ Mobil);
}
  
render() {
    return (
    <View>
        <View style={styles.container}>
          {
              this.state.Mobil.map((item, index) => (
                  <TouchableOpacity onPress={() => this.klik(item.nama)} style={styles.list}>
                      <Text>
                      {item.nama}
                      </Text>
                  </TouchableOpacity>
              ))
          }
        </View>
        <Button
          title='tampilkan allert'
          onPress={coba_alert}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 20,
    marginBottom:20,
    // backgroundColor:'grey'
  },
  list: {
    padding: 5,
    margin: 20,
    // marginBottom:20,
    backgroundColor:'grey'
  }

})