import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function webv(){
     return (
      <WebView
        source={{
          uri: 'https://daftar.rsudrsoetomo.jatimprov.go.id/'
        }}
        style={{ marginTop: 20 }}
      />
    );
}

// export default function webv(){
//   return (
//    <WebView
//       originWhitelist={['*']}
//       source={{html: '<h1><center>halooooo</center</h1>'}}
//    />
//  );
// }

