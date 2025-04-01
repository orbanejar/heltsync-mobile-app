import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ComingSoon from "@/components/coming-soon";

const VetClinic = () => {
  return (
    <View style={styles.container}>
      <ComingSoon header="Vet Clinic" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default VetClinic;
