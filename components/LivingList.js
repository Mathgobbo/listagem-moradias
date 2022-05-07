import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function LivingList({ navigation }) {
  return (
    <View>
      <FlatList
        data={require("../assets/moradias.json")}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", { moradia: item })} style={styles.item}>
            <View style={styles.itemParent}>
              <View>
                <Image source={item.fotos[0]} />
              </View>
              <View>
                <Text> {item.nome} </Text>
                <Text> {item.endereco}</Text>
              </View>
              <View style={styles.priceView}>
                <Text>{item.valor}</Text>
              </View>
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
  itemParent: {
    display: "flex",
    flexDirection: "row",
  },
  priceView: {
    marginLeft: "auto",
  }
});
