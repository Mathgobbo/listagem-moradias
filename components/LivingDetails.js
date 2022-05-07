import * as React from "react";
import { Text, View, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");
export function LivingDetails({ route, navigation }) {
  const { moradia } = route.params;
  return (
    <View>
      <View style={{ height: 200 }}>
        <Swiper autoplay activeDotColor="#aa56db">
          {moradia.fotos.map((foto) => (
            <View style={styles.slide} key={foto}>
              <Image style={styles.image} source={{ uri: foto }} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={{ padding: 8 }}>
        <Text>{moradia?.nome}</Text>
        <Text>{moradia?.valor}</Text>
        <Text>{moradia?.endereco}</Text>
        <Text>{moradia?.area} m²</Text>
        <Text>ALojamentos: {moradia?.qtdAlojamentos}</Text>
        <Text>Tipo da Moradia: {moradia?.tipoMoradia}</Text>
        <Text>Alojamento: {moradia?.tipoAlojamento}</Text>
        <Text>Tipo de Banheiro: {moradia?.tipoBanheiro}</Text>
        <View>
          <Text>Mobília:</Text>
          {moradia.mobiliado.length > 0 ? (
            <FlatList data={moradia.mobiliado} renderItem={({ item }) => <Text>- {item}</Text>} />
          ) : (
            <Text>Nenhuma mobília disponível</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  image: {
    width,
    flex: 1,
  },
});
