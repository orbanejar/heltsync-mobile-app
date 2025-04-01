import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "@/config";

type ComingSoonProps = {
  header?: string; // Optional header prop
};

const ComingSoon: React.FC<ComingSoonProps> = ({ header }) => {
  return (
    <View style={styles.container}>
      {header && <Text style={styles.header}>{header}</Text>}
      <Text style={styles.subtitle}>Chill, we're coming soon! 🥴</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.grey,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default ComingSoon;
