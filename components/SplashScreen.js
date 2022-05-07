import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export function SplashScreen( {navigation} ) {

  

  React.useEffect(()=>{
    setTimeout( () => {
      navigation.navigate("Moradias")
    }, 1500)
  
  }, [navigation])
  return(
    <View>
      <Image source={require('../assets/snack-icon.png')} />
    </View>
  )
}

