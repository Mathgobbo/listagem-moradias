import * as React from "react";
import { Text, View } from "react-native";
import { StackActions } from "@react-navigation/native";

export function SplashScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      // navigation.navigate("Moradias");
      navigation.dispatch(StackActions.replace("Moradias"));
    }, 1500);
  }, [navigation]);

  return (
    <View style={{ justifyContent: "center", width: "100vw", height: "100vh", alignItems: "center" }}>
      <Text style={{ fontWeight: "800" }}>UFSC</Text>
      <Text style={{ fontWeight: "400" }}>HOUSING</Text>
    </View>
  );
}
