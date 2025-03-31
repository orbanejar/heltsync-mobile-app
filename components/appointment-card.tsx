import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors, Icons } from "@/config";

export type Appointment = {
  type: string;
  doctorName: string;
  specialty: string;
  day: string;
  date: string;
  time: string;
  timezone: string;
  doctorImage: any;
};

type AppointmentCardProps = {
  appointment: Appointment;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => (
  <View style={styles.appointmentCard}>
    <Text style={styles.appointmentType}>{appointment.type}</Text>
    <View style={styles.cardTop}>
      <Image
        source={appointment.doctorImage}
        style={styles.doctorImage}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.doctorName}>{appointment.doctorName}</Text>
        <Text style={styles.specialty}>{appointment.specialty}</Text>
      </View>
    </View>
    <View style={styles.cardBottom}>
      <View style={styles.iconWithText}>
        <Image
          source={Icons.calendarToday}
          style={styles.appointmentIcon}
          resizeMode="contain"
        />
        <View style={styles.iconWithTextRight}>
          <Text style={styles.dateTimeText}>{appointment.day}</Text>
          <Text style={styles.dateTimeText}>{appointment.date}</Text>
        </View>
      </View>
      <View style={styles.iconWithText}>
        <Image
          source={Icons.accessTime}
          style={styles.appointmentIcon}
          resizeMode="contain"
        />
        <View style={styles.iconWithTextRight}>
          <Text style={styles.dateTimeText}>{appointment.time}</Text>
          <Text style={styles.dateTimeText}>{appointment.timezone}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  appointmentCard: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: Colors.primary,
    padding: 12,
  },
  appointmentType: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 4,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  doctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: -2,
  },
  specialty: {
    fontSize: 10,
    color: Colors.white,
  },
  cardBottom: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWithTextRight: {
    flexDirection: "column",
    justifyContent: "center",
  },
  appointmentIcon: {
    marginRight: 6,
    width: 30,
    height: 30,
  },
  dateTimeText: {
    color: Colors.white,
    fontSize: 10,
  },
});

export default AppointmentCard;
