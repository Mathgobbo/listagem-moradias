import * as React from "react";
import { Text, View, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import Swiper from "react-native-swiper/src";
import { Video, AVPlaybackStatus } from "expo-av";

const { width } = Dimensions.get("window");

export function LivingDetails({ route, navigation }) {
  const { moradia } = route.params;
  let swiperItems = [];
  for (let foto of moradia.fotos) {
    swiperItems.push(
      <View style={styles.slide} key={foto}>
        <Image style={styles.image} source={{ uri: foto }} />
      </View>
    );
  }
  for (let video of moradia.video) {
    swiperItems.push(
      <View style={styles.slide} key={video}>
        <Video style={styles.image} resizeMode="cover" isLooping useNativeControls source={{ uri: video }} />
      </View>
    );
  }

  return (
    <View>
      <View style={{ height: 200 }}>
        <Swiper autoplay activeDotColor="#aa56db">
          {swiperItems}
        </Swiper>
      </View>
      <View style={{ padding: 8 }}>
        <Text>{moradia?.nome}</Text>
        <Text>R$ {moradia?.valor}</Text>
        <Text>{moradia?.endereco}</Text>
        <Text>{moradia?.area} m²</Text>
        <Text>Alojamentos: {moradia?.qtdAlojamentos}</Text>
        <Text>Tipo da Moradia: {moradia?.tipoMoradia}</Text>
        <Text>Alojamento: {moradia?.tipoAlojamento}</Text>
        <Text>Tipo de Banheiro: {moradia?.tipoBanheiro}</Text>
        <View>
          <Text>Mobília:</Text>
          {moradia.mobiliado.length > 0 ? (
            <FlatList data={moradia.mobiliado} renderItem={({ item }) => <Text key={item}> - {item}</Text>} />
          ) : (
            <Text>Nenhuma mobília disponível</Text>
          )}
        </View>
        <Text>Mais Informações:</Text>
        <Text>{moradia.otherInfo}</Text>
        <Text>Contato:</Text>
        <Text>{moradia.email}</Text>
        <Text>{moradia.telefone}</Text>
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
