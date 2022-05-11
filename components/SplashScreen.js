import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { StackActions } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

export function SplashScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Moradias"));
    }, 1500);
  }, [navigation]);

  return (
    <View style={{ justifyContent: "center", width, height, alignItems: "center" }}>
      <Text style={{ fontWeight: "800" }}>UFSC</Text>
      <Text style={{ fontWeight: "400" }}>HOUSING</Text>
    </View>
  );
}
