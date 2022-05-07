import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "./components/SplashScreen";
import { LivingList } from "./components/LivingList";
import { LivingDetails } from "./components/LivingDetails/index";

// You can import from local files
import AssetExample from "./components/AssetExample";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen" component={SplashScreen} />
        <Stack.Screen name="Example" component={AssetExample} />
        <Stack.Screen name="Moradias" component={LivingList} />
        <Stack.Screen name="Detalhes" component={LivingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
