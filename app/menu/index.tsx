import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import Footer from "../../components/footer";

const Menu = () => {
  const onlineShop = [
    {
      id: 1,
      label: "Medication",
      icon: require("../../assets/icons/menu/shop/medication.png"),
    },
    {
      id: 2,
      label: "Supplements",
      icon: require("../../assets/icons/menu/shop/supplements.png"),
    },
    {
      id: 3,
      label: "Vitamins",
      icon: require("../../assets/icons/menu/shop/vitamins.png"),
    },
    {
      id: 4,
      label: "Health Essentials",
      icon: require("../../assets/icons/menu/shop/health-essentials.png"),
    },
    {
      id: 5,
      label: "Wellness Products",
      icon: require("../../assets/icons/menu/shop/wellness-products.png"),
    },
  ];

  const healthRecords = [
    {
      id: 11,
      label: "Pet Health Records",
      icon: require("../../assets/icons/menu/health-records/pet-health-records.png"),
    },
    {
      id: 12,
      label: "My Health Records",
      icon: require("../../assets/icons/menu/health-records/my-health-records.png"),
    },
    {
      id: 13,
      label: "Family Health Records",
      icon: require("../../assets/icons/menu/health-records/family-health-records.png"),
    },
    {
      id: 14,
      label: "Employee Health Records",
      icon: require("../../assets/icons/menu/health-records/employee-health-records.png"),
    },
  ];

  const services = [
    {
      id: 21,
      label: "Book Appointment",
      icon: require("../../assets/icons/menu/services/book-appointment.png"),
    },
    {
      id: 22,
      label: "Medication Planner",
      icon: require("../../assets/icons/menu/services/medication-planner.png"),
    },
    {
      id: 23,
      label: "Therapy Services",
      icon: require("../../assets/icons/menu/services/therapy-services.png"),
    },
    {
      id: 24,
      label: "SafeZone Buddy",
      icon: require("../../assets/icons/menu/services/safezone-buddy.png"),
    },
    {
      id: 25,
      label: "Health Insurance",
      icon: require("../../assets/icons/menu/services/health-insurance.png"),
    },
    {
      id: 26,
      label: "Find Specialist",
      icon: require("../../assets/icons/menu/services/find-specialist.png"),
    },
    {
      id: 27,
      label: "Hospital & Services",
      icon: require("../../assets/icons/menu/services/hospital-services.png"),
    },
    {
      id: 28,
      label: "Locator Buddy",
      icon: require("../../assets/icons/menu/services/locator-buddy.png"),
    },
  ];
  const footerItems = [
    {
      label: "SOS Emergency",
      link: "/",
      icon: require("../../assets/icons/menu/footer/sos-emergency.png"),
    },
    {
      label: "Partner Dashboard",
      link: "/",
      icon: require("../../assets/icons/menu/footer/partner-dashboard.png"),
    },
    {
      label: "My Account Settings",
      link: "/",
      icon: require("../../assets/icons/menu/footer/account-settings.png"),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contents}>
            <Text style={styles.title}>Shop Online</Text>
            <View style={styles.menuRow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {onlineShop.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.menuItem}>
                    <View style={styles.iconContainer}>
                      <Image source={item.icon} style={styles.icon} />
                    </View>
                    <Text style={styles.label} numberOfLines={2}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={styles.floatingArrow}>
                <Image
                  source={require("../../assets/icons/menu/shop/arrow-left.png")}
                  style={styles.floatingIcon}
                />
              </View>
            </View>
            <View style={styles.separator} />
          </View>

          <View style={styles.contents}>
            <Text style={styles.title}>Health Records</Text>
            <View style={styles.menuRow}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {healthRecords.map((item) => (
                  <TouchableOpacity key={item.id} style={styles.menuItem}>
                    <View style={styles.iconContainer}>
                      <Image source={item.icon} style={styles.icon} />
                    </View>
                    <Text style={styles.label} numberOfLines={2}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.separator} />
          </View>

          <View style={styles.services}>
            <Text style={styles.title}>Services</Text>
            <View style={styles.gridContainer}>
              {services.map((service) => (
                <TouchableOpacity key={service.id} style={styles.cardContainer}>
                  <View style={styles.card}>
                    <View style={styles.cardContent}>
                      <View style={styles.leftSection}>
                        <Text style={styles.servicesLabel}>
                          {service.label}
                        </Text>
                      </View>
                      <View style={styles.rightSection}>
                        <Image
                          source={service.icon}
                          style={styles.servicesIcon}
                        />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Footer items={footerItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: "auto",
    paddingTop: 70,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 150,
    backgroundColor: Colors.white,
  },
  contents: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    color: Colors.primary,
  },
  menuRow: {
    flexDirection: "row",
  },
  menuItem: {
    alignItems: "center",
    marginRight: 12,
    width: 60,
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  label: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
    flexWrap: "wrap",
  },
  floatingArrow: {
    display: "none",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: [{ translateY: -30 }],
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    pointerEvents: "none",
  },
  floatingIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  separator: {
    height: 0.5,
    backgroundColor: Colors.black,
    marginTop: 12,
    width: "100%",
  },
  services: {},
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

export default Menu;
