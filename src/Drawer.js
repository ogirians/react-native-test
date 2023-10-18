import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
const Pemain = (props) => {
  return (
      <View style={{marginBottom: 20}}>
          <Text>nama : {props.nama.depan}</Text>
          <Text>alamat : {props.alamat}</Text>
          <Text>telepon : {props.telepon}</Text>
      </View>
  )
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Pemain nama={{depan : 'cristiano'}} alamat="manyar" telepon="281932">Props1</Pemain>
        <Pemain nama="robnaldo" alamat="genteng" telepon="23">Props1</Pemain>
        <Pemain nama="bona" alamat="tidar" telepon="21">Props1</Pemain>
        <Pemain nama="bon2a" alamat="tidar" telepon="21">Props1</Pemain>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator theme={MyTheme}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
