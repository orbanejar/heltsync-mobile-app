import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Icons } from "@/config";

const HeaderBackground: React.FC = () => {
  return <ImageBackground source={Icons.menuHeaderBg} style={styles.background} />;
};

export default HeaderBackground;

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
});