import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FavoriteLivingButton from "./components/FavoriteLivingButton";
import LivingMediasSwiper from "./components/LivingMediasSwiper";

export function LivingDetails({ route, navigation }) {
  const { moradia } = route.params;

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

const styles = StyleSheet.create({});
