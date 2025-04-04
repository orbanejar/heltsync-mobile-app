import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AccountSelectionCard from "@/components/account-selection-card";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { Strings, Colors } from "@/config";

const AccountCreation = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>{Strings.auth.accountCreation}</Text>
      <Text style={styles.subHeader}>
        {Strings.auth.accountCreationMessage}
      </Text>

      <AccountSelectionCard
        title={Strings.auth.individualAccount}
        description={Strings.auth.individualAccountMessage}
        description2={Strings.auth.individualAccountMessage2}
        buttonText={Strings.auth.individual}
        onPress={() => router.push("/individual-registration")}
      />

      <AccountSelectionCard
        title={Strings.auth.businessAccount}
        description={Strings.auth.businessAccountMessage}
        buttonText={Strings.auth.business}
        onPress={() => router.push("/business-registration")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 32,
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    color: Colors.gray,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
    marginBottom: 32,
  },
});

export default AccountCreation;
