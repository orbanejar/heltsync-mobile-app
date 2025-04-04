import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Icons, Strings } from "@/config";

export default function AuthLayout() {
  const navigation = useNavigation();
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="account-creation" options={{ headerShown: false }} />
      <Stack.Screen
        name="individual-registration"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="business-registration"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="business-registration-main"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: Strings.navigation.back,
          headerTitleStyle: styles.backTitle,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.customBackButton}
            >
              <Image
                source={Icons.backWithBorder}
                style={styles.customBackIcon}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  backTitle: {
    fontSize: 18,
    fontWeight: "100",
    color: Colors.gray,
  },
  customBackButton: {
    marginRight: 10,
  },
  customBackIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
