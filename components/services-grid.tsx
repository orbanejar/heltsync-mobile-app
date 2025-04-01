import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "@/config";
import { useRouter } from "expo-router";
import { MenuItem } from "./horizontal-menu-row";

type ServicesGridProps = {
  services: MenuItem[];
};

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  const router = useRouter();
  return (
    <View style={styles.servicesContainer}>
      <Text style={styles.title}>Services</Text>
      <View style={styles.gridContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.cardContainer}
            onPress={() => router.push(service.link)}
          >
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.leftSection}>
                  <Text style={styles.servicesLabel}>{service.label}</Text>
                </View>
                <View style={styles.rightSection}>
                  <Image source={service.icon} style={styles.servicesIcon} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicesContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.primary,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "49%",
    marginBottom: 10,
  },
  card: {
    height: 70,
    backgroundColor: "rgba(100, 100, 100, 0.1)",
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
  },
  leftSection: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingLeft: 12,
    paddingBottom: 12,
  },
  rightSection: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 12,
  },
  servicesIcon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  servicesLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#555",
    textAlign: "left",
  },
});

export default ServicesGrid;
