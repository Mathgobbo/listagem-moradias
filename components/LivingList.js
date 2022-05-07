import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function LivingList({ navigation }) {
  return (
    <View>
      <FlatList
        data={require("../assets/moradias.json")}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", { moradia: item })} style={styles.item}>
            <View>
              <View>
                <Text>Blablka</Text>
              </View>
              <Text> {item.nome}</Text>
              <Text> {item.endereco}</Text>
              <Text> {item.valor}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
});
