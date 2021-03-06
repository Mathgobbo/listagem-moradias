import * as React from "react";
import { FlatList, StyleSheet, Text, View, Platform, Linking, Pressable } from "react-native";
import FavoriteLivingButton from "./components/FavoriteLivingButton";
import LivingMediasSwiper from "./components/LivingMediasSwiper";

export function LivingDetails({ route, navigation }) {
  const { moradia } = route.params;

  function onAddressClick() {
    const scheme = Platform.select({
      ios: "maps:0,0?q=" + moradia.endereco,
      android: "geo:0,0?q=" + moradia.endereco,
      web: "https://www.google.com/maps/search/?api=1&query=" + moradia.endereco,
    });

    Linking.openURL(scheme);
  }

  function onPhoneClick() {
    Linking.openURL("tel:" + moradia.telefone);
  }
  function onMailClick() {
    Linking.openURL("mailto:" + moradia.email);
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <FavoriteLivingButton moradia={moradia} />,
    });
  }, [navigation]);

  return (
    <View>
      <LivingMediasSwiper moradia={moradia} />
      <View style={{ padding: 8 }}>
        <Text>{moradia?.nome}</Text>
        <Text>R$ {moradia?.valor}</Text>
        <Pressable onPress={onAddressClick}>
          <Text style={{ color: "#00abab" }}>{moradia?.endereco}</Text>
        </Pressable>
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
        <Pressable onPress={onMailClick}>
          <Text>{moradia.email}</Text>
        </Pressable>
        <Pressable onPress={onPhoneClick}>
          <Text>{moradia.telefone}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
