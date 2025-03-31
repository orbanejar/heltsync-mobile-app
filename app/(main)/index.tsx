import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Colors, Strings, Icons } from "@/config";
import { StatusBar } from "expo-status-bar";
import ServiceSection from "../../components/service-section";
import AppointmentCard, { Appointment } from "../../components/appointment-card";

// Data Arrays
const servicesData = {
  main: [
    {
      label: Strings.services.hospital,
      icon: Icons.hospitalServicesHome,
    },
    {
      label: Strings.services.onlinePrescription,
      icon: Icons.onlinePrescriptionHome,
    },
    {
      label: Strings.services.theraphy,
      icon: Icons.therapyServicesHome,
    },
    {
      label: Strings.services.healthInsurance,
      icon: Icons.healthInsuranceHome,
    },
  ],
  other: [
    {
      label: Strings.services.vetClinic,
      icon: Icons.vetClinicServicesHome,
    },
    {
      label: Strings.services.dental,
      icon: Icons.dentalServicesHome,
    },
    {
      label: Strings.services.aesthetic,
      icon: Icons.aestheticServicesHome,
    },
    {
      label: Strings.services.laboratory,
      icon: Icons.labServicesHome,
    },
  ],
};

const consultations: Appointment[] = [
  {
    type: "Physical Consultation",
    doctorName: "Dr. Alvi Arcinal",
    specialty: "Heart Specialist",
    day: "SATURDAY",
    date: "October 12, 2024",
    time: "08:30 AM",
    timezone: "Standard PH Time",
    doctorImage: require("../../assets/doctor.png"),
  },
];

const HomePage = () => {
  const greetingText = "Hello there, Ruru!";

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>{greetingText}</Text>
        </View>

        {/* Ad Placeholder */}
        <View style={styles.adContainerRow}>
          <View style={styles.adContainer}>
            <View style={styles.adPlaceholder}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Ad banner will be placed here.
              </Text>
            </View>
          </View>
        </View>

        {/* Main & Other Services */}
        <ServiceSection variant="main" services={servicesData.main} />
        <ServiceSection variant="other" services={servicesData.other} />

        {/* Upcoming Appointments */}
        <View style={styles.appointmentContainer}>
          <View style={styles.appointmentHeaderContainer}>
            <Text style={styles.appointmentHeader}>
              {Strings.appointment.header}
            </Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>{Strings.general.viewAll}</Text>
              <Image
                source={Icons.arrowForward}
                style={{ width: 15, height: 15 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {consultations.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}

          {/* Reminder */}
          <View style={styles.reminderContainer}>
            <Text style={styles.reminderTitle}>
              {Strings.appointment.reminder}
            </Text>
            <Text style={styles.reminderText}>
              {Strings.appointment.reminderMessage}
              <Text style={styles.linkText}>
                {Strings.appointment.notificationSettings}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  greetingContainer: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  scrollViewContent: {
    marginTop: 16,
    paddingBottom: 30,
    backgroundColor: Colors.aliceBlue,
  },
  greetingText: {
    fontSize: 16,
    paddingBottom: 16,
    color: Colors.primary,
  },
  adContainerRow: {
    backgroundColor: Colors.aliceBlue,
    padding: 16,
  },
  adContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  adPlaceholder: {
    width: "100%",
    height: 150,
    backgroundColor: Colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
  appointmentContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    borderRadius: 10,
    padding: 10,
    marginTop: 8,
  },
  appointmentHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  appointmentHeader: {
    fontSize: 16,
    color: Colors.primary,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  viewAllText: {
    color: Colors.grey,
    fontSize: 12,
    marginRight: 4,
  },
  reminderContainer: {
    marginTop: 16,
  },
  reminderTitle: {
    color: Colors.grey,
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 4,
  },
  reminderText: {
    color: Colors.grey,
    fontSize: 10,
    lineHeight: 16,
  },
  linkText: {
    color: Colors.grey,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
