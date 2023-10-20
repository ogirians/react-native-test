import { StyleSheet, Text, View, Image,Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Pendaftaran  from './Pendaftaran';
import  Article  from './Article';
import  Home  from './Home';
import  Riwayat  from './Riwayat';

const Drawer = createDrawerNavigator();

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
      // width : 150,
      // height : 150,
      backgroundColor : 'lightgrey',
      flexDirection : 'row',
      // alignSelf : 'center',
      marginHorizontal : 10,
      marginTop : 2,
      borderRadius : 10
    },
    menuArticleHome : {
      // width : 150,
      // height : 150,
      backgroundColor : 'lightgrey',
      // flexDirection : 'column',
      // alignSelf : 'center',
      marginHorizontal : 10,
      marginTop : 2,
      borderRadius : 10
    },
    listHome : {
      padding : 20,
      width : 200,
      height : 200,
      backgroundColor : 'green',
      margin : 30,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems : 'center',
      elevation : 4
    },
    listArticle : {
      flex : 1,
      padding : 20,
      flexWrap : 'wrap',
      // width : 'auto',
      // height : 200,
      backgroundColor : 'green',
      margin : 10,
      borderRadius : 10,
      // justifyContent : 'center',
      // alignItems : 'center',
      elevation : 4
    },
    listTextHome : {
      fontSize : 30,
      fontWeight : 'bold',
      textAlign : 'center',
      color : "white",
    },
    listTextArticle : {
      fontSize : 15,
      fontWeight : 'bold',
      // textAlign : 'center',
      color : "white",
      marginLeft : 10,
      flexWrap : 'wrap'
    },
    listTextIsiArticle : {
      fontSize : 13,
      // fontWeight : 'bold',
      // textAlign : 'center',
      color : "white",
      marginLeft : 10
    },


    titleText : {
      fontSize : 15,
      fontWeight : 'bold',
      textAlign : 'center',
      color : "white",
    },
    cardTitle : {
      paddingHorizontal :20  ,
      // width : ,
      // height : 70,
      paddingVertical : 15,
      backgroundColor : 'lightgrey',
      marginHorizontal : 10,
      marginVertical : 2,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'flex-start',
      // elevation : 4

    }

    
})

