import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const Konter = () => {
    const [number,setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button onPress={() => setNumber(number + 1)} title='tambah pluss'>+</Button>
        </View>
    )
}



const State3 = () => {
  return (
    <View>
      <Text>State3</Text>
      <Konter/>
    </View>
  )
}

export default State3

const styles = StyleSheet.create({})