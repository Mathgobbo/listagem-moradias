import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { LivingDetails } from "./components/LivingDetails/index";
import { LivingList } from "./components/LivingList";
import { SelectedLivingList } from "./components/SelectedLivingsList";
import { SplashScreen } from "./components/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash Screen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Moradias" component={LivingList} />
        <Stack.Screen name="Detalhes" component={LivingDetails} />
        <Stack.Screen name="Moradias Favoritadas" component={SelectedLivingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
