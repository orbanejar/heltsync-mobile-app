import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import VirtualConsultationButton from "@/components/virtual-consultation-button";
import GroupServicesList from "@/components/group-services-list";
import { Strings, Colors } from "@/config";

const BookAppointmentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>{Strings.services.bookAppointment}</Text>
      <Text style={styles.subTitle}>
        I would like to book an appointment for..
      </Text>

      <VirtualConsultationButton />
      <View style={styles.groupServicesContainer}>
        <View style={styles.separator} />
        <Text style={styles.groupServicesTitle}>Group Services</Text>
        <Text style={styles.groupServicesSubTitle}>
          Select a specific clinic or hospital for physical or in-person
          consultations with our partnered providers.
        </Text>
        <GroupServicesList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  groupServicesContainer: {
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  subTitle: {
    fontSize: 13,
    marginBottom: 16,
    color: Colors.gray,
  },
  groupServicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  groupServicesSubTitle: {
    fontSize: 13,
    marginBottom: 16,
    color: Colors.gray,
  },
  separator: {
    height: 0.5,
    marginBottom: 16,
    backgroundColor: Colors.black,
    width: "100%",
  },
});

export default BookAppointmentScreen;
