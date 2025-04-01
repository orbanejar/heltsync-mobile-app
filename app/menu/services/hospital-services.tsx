import React from "react";
import { View, StyleSheet } from "react-native";
import ComingSoon from "@/components/coming-soon";

const HospitalServices = () => {
  return (
    <View style={styles.container}>
      <ComingSoon header="Hospital Services" />
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

export default HospitalServices;
