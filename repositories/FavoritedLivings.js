import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async () => {
  const value = await AsyncStorage.getItem("@favorited-livings");
  if (value != null) return JSON.parse(value);
  return [];
};
export const setFavoritedLivings = async (livingsNames) =>
  await AsyncStorage.setItem("@favorited-livings", JSON.stringify(livingsNames));

export const addFavoritedLiving = async (living) => {
  const livings = await getData();
  await setFavoritedLivings([...livings, living]);
};

export const handleFavoritedLiving = async (living) => {
  const livings = (await getData()) || [];
  let indexInLivings = livings.findIndex((oldLivingName) => oldLivingName == living.nome);
  if (indexInLivings === -1) return await setFavoritedLivings([...livings, living.nome]);
  livings.splice(indexInLivings, 1);
  return await setFavoritedLivings(livings);
};

export const isLivingFavoritedSelected = async (living) => {
  const livings = (await getData()) || [];
  let indexInLivings = livings.findIndex((oldLivingName) => oldLivingName == living.nome);
  return indexInLivings > -1;
};
