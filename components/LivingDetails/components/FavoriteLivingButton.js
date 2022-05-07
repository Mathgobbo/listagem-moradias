import * as React from "react";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { handleFavoritedLiving, isLivingFavoritedSelected } from "../../../repositories/FavoritedLivings";

function FavoriteLivingButton({ moradia }) {
  const [isFavorited, setIsFavorited] = React.useState(false);
  React.useEffect(() => getIsFavorited(), []);

  async function getIsFavorited() {
    let newValue = await isLivingFavoritedSelected(moradia);
    setIsFavorited(newValue);
  }

  async function onFavoriteClick() {
    try {
      await handleFavoritedLiving(moradia);
      getIsFavorited();
    } catch (error) {
      console.log(error);
    }
  }

  return isFavorited ? (
    <IconButton animated icon={"star"} onPress={onFavoriteClick} />
  ) : (
    <IconButton icon={"star-outline"} onPress={onFavoriteClick} />
  );
}

export default React.memo(FavoriteLivingButton);
