import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../../constants/Colors";

const HomePage = () => {
  /** Replace with actual data values */
  const firstName = "Ruru";
  const mainServices = [
    {
      label: "Hospital Services",
      icon: require("../../../assets/icons/services/hospital-services.png"),
    },
    {
      label: "Online Prescription",
      icon: require("../../../assets/icons/services/online-prescription.png"),
    },
    {
      label: "Therapy Services",
      icon: require("../../../assets/icons/services/theraphy-services.png"),
    },
    {
      label: "Health Insurance",
      icon: require("../../../assets/icons/services/health-insurance.png"),
    },
  ];
  const otherServices = [
    {
      label: "Vet Clinic Services",
      icon: require("../../../assets/icons/services/vet-clinic-services.png"),
    },
    {
      label: "Dental Services",
      icon: require("../../../assets/icons/services/dental-services.png"),
    },
    {
      label: "Aesthetic Services",
      icon: require("../../../assets/icons/services/aesthetic-services.png"),
    },
    {
      label: "Laboratory Services",
      icon: require("../../../assets/icons/services/laboratory-services.png"),
    },
  ];
  const consultations = [
    {
      type: "Physical Consultation",
      doctorName: "Dr. Alvi Arcinal",
      specialty: "Heart Specialist",
      day: "SATURDAY",
      date: "October 12, 2024",
      time: "08:30 AM",
      timezone: "Standard PH Time",
      doctorImage: require("../../../assets/doctor.png"),
    },
    // {
    //   type: "Online Consultation",
    //   doctorName: "Dr. Mary Jane",
    //   specialty: "Dermatologist",
    //   day: "WEDNESDAY",
    //   date: "March 30, 2025",
    //   time: "10:00 AM",
    //   timezone: "Standard PH Time",
    //   doctorImage: require("../../assets/doctor.png"),
    // },
  ];

  return (
    <View>
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>
            {"Hello there, " + firstName + "!"}
          </Text>
        </View>

        {/* Ad Placeholder */}
        <View style={styles.adContainer}>
          <View style={styles.adPlaceholder}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Ad banner will be placed here.
            </Text>
          </View>
        </View>

        {/* Main Services */}
        <View style={styles.mainServicesContainer}>
          {mainServices.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
              <Image
                source={service.icon}
                style={styles.serviceIcon}
                resizeMode="contain"
              />
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Other Services */}
        <View style={styles.otherServicesContainer}>
          {otherServices.map((service, index) => (
            <TouchableOpacity key={index} style={styles.serviceItem}>
              <Image
                source={service.icon}
                style={styles.serviceIcon}
                resizeMode="contain"
              />
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.appointmentContainer}>
          <View style={styles.appointmentHeaderContainer}>
            <Text style={styles.appointmentHeader}>Upcoming Appointment</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Image
                source={require("../../../assets/icons/arrow-forward.png")}
                style={{width: 15, height: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          {/* Render multiple consultation cards */}
          {consultations.map((item, index) => (
            <View key={index} style={styles.consultationCard}>
              <Text style={styles.consultationType}>{item.type}</Text>
              <View style={styles.cardTop}>
                <Image
                  source={item.doctorImage}
                  style={styles.doctorImage}
                  resizeMode="cover"
                />
                <View style={styles.textContainer}>
                  <Text style={styles.doctorName}>{item.doctorName}</Text>
                  <Text style={styles.specialty}>{item.specialty}</Text>
                </View>
              </View>

              {/* Date & Time Row */}
              <View style={styles.cardBottom}>
                <View style={styles.iconWithText}>
                  <Image
                    source={require("../../../assets/icons/calendar-today.png")}
                    style={styles.consultationIcon}
                    resizeMode="contain"
                  />
                  <View style={styles.iconWithTextRight}>
                    <Text style={styles.dateTimeText}>{item.day}</Text>
                    <Text style={styles.dateTimeText}>{item.date}</Text>
                  </View>
                </View>
                <View style={styles.iconWithText}>
                  <Image
                    source={require("../../../assets/icons/access-time.png")}
                    style={styles.consultationIcon}
                    resizeMode="contain"
                  />
                  <View style={styles.iconWithTextRight}>
                    <Text style={styles.dateTimeText}>{item.time}</Text>
                    <Text style={styles.dateTimeText}>{item.timezone}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}

          {/* Bottom Section: Reminder */}
          <View>
            <Text style={styles.reminderTitle}>Reminder:</Text>
            <Text style={styles.reminderText}>
              To ensure you receive timely alerts for your appointments, please
              verify that the app has permission for alarms and reminders in
              your device settings. Go to{" "}
              <Text style={styles.linkText}>Notification Settings.</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  scrollViewContent: {
    paddingBottom: 10,
    backgroundColor: Colors.lightGrey,
  },
  greetingText: {
    color: Colors.primary,
    fontSize: 16,
  },
  adContainer: {
    marginTop: 10,
    marginHorizontal: 16,
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
  mainServicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  otherServicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: Colors.white,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  serviceItem: {
    width: "23%",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignItems: "center",
    textAlign: "center",
    marginBottom: 16,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginBottom: 1,
  },
  serviceLabel: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
  },
  appointmentContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
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

  consultationCard: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    backgroundColor: Colors.primary,
    padding: 12,
  },
  consultationType: {
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
  consultationIcon: {
    marginRight: 6,
    width: 30,
    height: 30,
  },
  dateTimeText: {
    color: Colors.white,
    fontSize: 10,
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
