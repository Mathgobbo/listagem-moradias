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
        keyExtractor={(item) => item.nome + "-" + item.endereco}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detalhes", { moradia: item })} style={styles.item}>
            <View style={styles.itemParent}>
              <View>
                <Image source={{ uri: item.fotos[0] }} style={styles.image} />
              </View>
              <View style={styles.infoParent}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.infoMoradia}> {item?.nome} </Text>
                </View>
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
  infoParent: {
    flex: 2,
  },
  infoMoradia: {
    fontSize: 12,
    flexShrink: 1,
    flex: 1,
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
