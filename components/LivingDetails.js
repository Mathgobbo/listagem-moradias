import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

export function LivingDetails( {route, navigation} ) {
  const {moradia} = route.params
  return (
    <View><Text>{moradia.nome}</Text></View>
  )
}