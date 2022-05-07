import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";

export function LivingList({ navigation }) {
  return (
    <View>
      <FlatList
        data={require("../assets/moradias.json")}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", { moradia: item })} style={styles.item}>
            <View style={styles.itemParent}>
              <View>
                <Image source={{uri: item.fotos[0]}} style={styles.imageContainer} />
              </View>
              <View>
                <Text> {item.nome} </Text>
                <Text> {item.endereco}</Text>
              </View>
              <View style={styles.priceView}>
                <Text> R$ {item.valor} </Text>
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
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginRight: 20,
  }
});
