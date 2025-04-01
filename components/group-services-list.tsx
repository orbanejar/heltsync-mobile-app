import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Strings, Colors, Icons } from "@/config";

const services = [
  {
    label: Strings.services.hospital,
    icon: Icons.hospitalServicesGray,
  },
  {
    label: Strings.services.vetClinic,
    icon: Icons.vetClinicServicesGray,
  },
  {
    label: Strings.services.dentalClinic,
    icon: Icons.dentalClinicServicesGray,
  },
  {
    label: Strings.services.aestheticClinic,
    icon: Icons.aestheticClinicServiesGray,
  },
  {
    label: Strings.services.laboratory,
    icon: Icons?.laboratoryServicesGray,
  },
];

const GroupServicesList = () => {
  return (
    <View style={styles.container}>
      {services.map((service, index) => (
        <TouchableOpacity key={index} style={styles.serviceItem}>
          <View style={styles.leftSection}>
            <View style={styles.iconWrapper}>
              <Image source={service.icon} style={styles.icon} />
            </View>
            <Text style={styles.serviceLabel}>{service.label}</Text>
          </View>
          <Image source={Icons.arrowForward} style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 12,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  serviceLabel: {
    fontSize: 17,
    color: Colors.secondary,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default GroupServicesList;
