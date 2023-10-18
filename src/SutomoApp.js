import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

  function Article() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>halman article</Text>
      </View>
    );
  }

  function Pendaftaran() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>halman halaman Pendaftaran</Text>
      </View>
    );
  }
  function Riwayat() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>halman halaman riwayat</Text>
      </View>
    );
  }

  function Home() {
    return (
    <ScrollView>
      <View>
        <Image
            source={require('./assets/banner1.png')}
            style={{width: 'auto',height: 200}}
        />
        <Text style={{fontSize: 25, textAlign:'center', marginTop: 20}}>
            Selamat Datang di 
        </Text>
        <Text style={{fontWeight : 'bold', textAlign: 'center', fontSize : 30, marginBottom : 30}}>SutomoApp</Text>
        <View style={styles.menuHome}></View>
        <View style={styles.menuHome}></View>
        <View style={styles.menuHome}></View>
      </View>
    </ScrollView>
    );
  }

const sutomoApp = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: ('Home'),
                    headerStyle : {
                        backgroundColor : 'lightGray'
                    },
                headerRight : () => (
                    <View style={{flexDirection : 'row'}}>
                        <Image
                            source={require('./assets/rsds2.png')}
                            style={{width: 25,height: 25, marginRight: 20}}
                        />
                    </View>
                )
                }}
                
            />
            <Drawer.Screen name="Article" component={Article} />
            <Drawer.Screen name="Pendaftaran" component={Pendaftaran} />
            <Drawer.Screen name="Riwayat" component={Riwayat} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default sutomoApp

const styles = StyleSheet.create({
    menuHome : {
        width : 150,
        height : 150,
        backgroundColor : 'lightgreen',
        // flexDirection : 'row',
        alignSelf : 'center',
        margin : 50
    }
})