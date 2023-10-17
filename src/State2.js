import { View, Text, Button, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const State2 = () => {
  const [nama, setNama] = useState('messi')
  const [negara, setNegara] = useState('argentina')
  const [detil, setDetil] = useState({umur : '30', klub :'miami'})

  const setGoat = () => {
    setNama('cristiano')
    setNegara('portigal')
    setDetil({umur : '38', klub : 'alnassr'})
  }


  return (
    <View>
        <View></View>
        <Text>Goat adalah : {nama}</Text>
        <Text>Negara : {negara}</Text>
        <Text>umur goat : {detil.umur}</Text>
        <Text>klub goat : {detil.klub}</Text>
        <Button
           onPress={() => setGoat()}
           title='goat ssebenarnya'
        />
    </View>
  )
}

export default State2