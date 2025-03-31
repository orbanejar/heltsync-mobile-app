import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export type Service = {
  label: string;
  icon: any;
};

const ServiceItem: React.FC<Service> = ({ label, icon }) => (
  <TouchableOpacity style={styles.serviceItem}>
    <Image source={icon} style={styles.serviceIcon} resizeMode="contain" />
    <Text style={styles.serviceLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  serviceItem: {
    width: "23%",
    borderRadius: 10,
    paddingVertical: 4,
    alignItems: "center",
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  serviceLabel: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
  },
});

export default ServiceItem;
