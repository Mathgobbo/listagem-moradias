import * as React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { getData } from "../repositories/FavoritedLivings";

export function SelectedLivingList({ navigation }) {
  const [livings, setLivings] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const isFocused = useIsFocused();

  async function getFavoritedLivings() {
    setIsLoading(true);
    const data = await getData();
    setLivings(data);
    setIsLoading(false);
  }

  React.useEffect(() => {
    getFavoritedLivings();
  }, [isFocused]);

  return (
    <View>
      {isLoading ? (
        <Text style={{ margin: 4 }}>Carregando...</Text>
      ) : livings.length == 0 ? (
        <Text style={{ margin: 4 }}>Nenhuma Moradia Favoritada até o momento</Text>
      ) : (
        <FlatList
          data={livings}
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
      )}
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
