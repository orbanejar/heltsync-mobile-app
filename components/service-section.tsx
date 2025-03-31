import React from "react";
import { View, StyleSheet } from "react-native";
import ServiceItem, { Service } from "./service-item";
import { Colors } from "@/config";

export type ServiceSectionProps = {
  variant: "main" | "other";
  services: Service[];
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ variant, services }) => (
  <View style={styles.serviceSection}>
    <View
      style={[
        styles.serviceList,
        variant === "main" ? styles.mainServicesContainer : styles.otherServicesContainer,
      ]}
    >
      {services.map((service, index) => (
        <ServiceItem key={index} label={service.label} icon={service.icon} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  serviceSection: {
    marginHorizontal: 16
  },
  serviceList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  },
  mainServicesContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 5
  },
  otherServicesContainer: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 8
  },
});

export default ServiceSection;
