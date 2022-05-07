import * as React from "react";
import { Text, View } from "react-native";

export function LivingDetails({ route, navigation }) {
  const { moradia } = route.params;
  return (
    <View>
      <Text>{moradia.nome}</Text>
    </View>
  );
}
