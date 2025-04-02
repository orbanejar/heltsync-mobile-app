import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";
import { Strings, Colors, Icons } from "@/config";

const VirtualConsultationButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.iconWrapper}>
        <Image source={Icons.virtualConsultation} style={styles.icon} />
      </View>
      <Text style={styles.buttonText}>
        {Strings.services.virtualConsultation}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGray,
    padding: 18,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  iconWrapper: {
    marginRight: 12,
  },
  icon: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 19,
    color: Colors.brightSkyBlue,
  },
});

export default VirtualConsultationButton;
