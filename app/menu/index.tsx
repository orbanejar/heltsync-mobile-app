import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Strings, Icons } from "@/config";
import Footer from "../../components/footer";
import { StatusBar } from "expo-status-bar";
import HorizontalMenuRow, {
  MenuItem,
} from "../../components/horizontal-menu-row";
import ServicesGrid from "../../components/services-grid";

type FooterItem = {
  label: string;
  link: string;
  icon: any;
};

const Menu = () => {
  const onlineShop: MenuItem[] = [
    {
      id: 1,
      link: "",
      label: Strings.shopOnline.medication,
      icon: Icons.medication,
    },
    {
      id: 2,
      link: "",
      label: Strings.shopOnline.supplements,
      icon: Icons.supplements,
    },
    {
      id: 3,
      link: "",
      label: Strings.shopOnline.vitamins,
      icon: Icons.vitamins,
    },
    {
      id: 4,
      link: "",
      label: Strings.shopOnline.healthEssentials,
      icon: Icons.healthEssentials,
    },
    {
      id: 5,
      link: "",
      label: Strings.shopOnline.wellnessProducts,
      icon: Icons.wellnessProducts,
    },
  ];

  const healthRecords: MenuItem[] = [
    {
      id: 11,
      link: "",
      label: Strings.healthRecords.pet,
      icon: Icons.petHealthRecords,
    },
    {
      id: 12,
      link: "",
      label: Strings.healthRecords.myhealth,
      icon: Icons.myHealthRecords,
    },
    {
      id: 13,
      link: "",
      label: Strings.healthRecords.family,
      icon: Icons.familyHealthRecords,
    },
    {
      id: 14,
      link: "",
      label: Strings.healthRecords.employee,
      icon: Icons.employeeHealthRecords,
    },
  ];

  const services: MenuItem[] = [
    {
      id: 21,
      link: "/menu/services/book-appointment",
      label: Strings.services.bookAppointment,
      icon: Icons.bookAppointment,
    },
    {
      id: 22,
      link: "",
      label: Strings.services.medicationPlanner,
      icon: Icons.medicationPlanner,
    },
    {
      id: 23,
      link: "",
      label: Strings.services.theraphy,
      icon: Icons.therapyServices,
    },
    {
      id: 24,
      link: "",
      label: Strings.services.safezoneBuddy,
      icon: Icons.safezoneBuddy,
    },
    {
      id: 25,
      link: "",
      label: Strings.services.healthInsurance,
      icon: Icons.healthInsurance,
    },
    {
      id: 26,
      link: "",
      label: Strings.services.findSpecialist,
      icon: Icons.findSpecialist,
    },
    {
      id: 27,
      link: "",
      label: Strings.services.hospital,
      icon: Icons.hospitalServices,
    },
    {
      id: 28,
      link: "",
      label: Strings.services.locatorHubby,
      icon: Icons.locatorBuddy,
    },
  ];

  const footerItems: FooterItem[] = [
    {
      label: Strings.footer.sosEmergency,
      link: "/",
      icon: Icons.sosEmergency,
    },
    {
      label: Strings.footer.partnerDashboard,
      link: "/",
      icon: Icons.partnerDashboard,
    },
    {
      label: Strings.footer.myAccountSettings,
      link: "/",
      icon: Icons.accountSettings,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <HorizontalMenuRow title="Shop Online" items={onlineShop} showArrow />
          <HorizontalMenuRow title="Health Records" items={healthRecords} />
          <ServicesGrid services={services} />
        </ScrollView>
      </SafeAreaView>
      <Footer items={footerItems} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
    paddingBottom: 130,
    backgroundColor: Colors.white,
  },
});
