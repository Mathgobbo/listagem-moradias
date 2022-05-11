import { Video } from "expo-av";
import * as React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper/src";

const { width } = Dimensions.get("window");

function LivingMediasSwiper({ moradia }) {
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
    <View style={{ height: 200 }}>
      <Swiper activeDotColor="#aa56db">{swiperItems}</Swiper>
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

export default LivingMediasSwiper;
