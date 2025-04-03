export const unstable_settings = {
  initialRouteName: "(main)",
};

import React, { useState } from "react";
import { Stack } from "expo-router";
import { useNavigation } from "expo-router";
import HeaderRight from "@/components/header-right";
import HeaderBackground from "@/components/header-background-colored";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Strings, Colors, Icons } from "@/config";

import { AuthProvider } from "@/context/auth-context";
import AuthContent from "@/components/authentication-content";

const RootLayout = () => {
  const navigation = useNavigation();
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <AuthProvider>
      <AuthContent>
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen
            name="menu/index"
            options={{
              headerShown: true,
              headerTitle: Strings.navigation.menu,
              headerTitleStyle: styles.headerTitle,
              headerLeft: () => null,
              headerTitleAlign: "left",
              headerBackVisible: false,
              headerTransparent: true,
              headerBackground: () => <HeaderBackground />,
              headerRight: () => (
                <HeaderRight
                  notificationCount={notificationCount}
                  onHomePress={() => navigation.goBack()}
                />
              ),
            }}
          />
          <Stack.Screen
            name="menu/services/book-appointment"
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
          <Stack.Screen
            name="menu/services/vet-clinic"
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
          <Stack.Screen
            name="menu/services/hospital-services"
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
          <Stack.Screen
            name="menu/services/dental-clinic"
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
          <Stack.Screen
            name="menu/services/laboratory-clinic"
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
          <Stack.Screen
            name="menu/services/aesthetic-clinic"
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
      </AuthContent>
    </AuthProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  backTitle: {
    fontSize: 18,
    fontWeight: "100",
    color: Colors.gray,
  },
  backTitleStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
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
