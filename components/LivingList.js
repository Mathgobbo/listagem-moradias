import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Button } from "react-native-paper";

export function LivingList({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button color="#333" icon={"star"} onPress={() => navigation.navigate("Moradias Favoritadas")}>
          Favoritas
        </Button>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <FlatList
        data={require("../assets/moradias.json")}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", { moradia: item })} style={styles.item}>
            <View style={styles.itemParent}>
              <View>
                <Image source={{ uri: item.fotos[0] }} style={styles.image} />
              </View>
              <View>
                <Text style={styles.infoMoradia}> {item?.nome} </Text>
                <Text style={styles.infoMoradia}> {item?.endereco}</Text>
              </View>
              <View style={styles.valorContainer}>
                <Text style={styles.priceView}> R$ {item?.valor} </Text>
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
  infoMoradia: {
    fontSize: 12,
  },
  priceView: {
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 5,
    marginRight: 5,
  },
  valorContainer: {
    marginLeft: "auto",
  },
});
