export const unstable_settings = {
  initialRouteName: "(tabs)",
};

import React, { useState } from "react";
import { Stack } from "expo-router";
import { useNavigation } from "expo-router";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const navigation = useNavigation();
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="menu/index"
        options={{
          headerShown: true,
          headerTitle: "Menu",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => null,
          headerBackVisible: false,
          headerTransparent: true,
          headerBackground: () => {
            return (
              <ImageBackground
                source={require("../assets/menu-header-bg-image.png")}
                style={styles.headerBackground}
              />
            );
          },
          headerRight: () => (
            <>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icons/header/bell.png")}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />
                {notificationCount > 0 && (
                  <View style={styles.notificationBadge}>
                    <Text style={styles.notificationText}>
                      {notificationCount > 9 ? "9+" : notificationCount}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Image
                  source={require("../assets/icons/menu/home.png")}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/icons/menu/chat.png")}
                  style={styles.headerIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </>
          ),
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  headerBackground: {
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.white,
  },
  headerIcon: {
    marginLeft: 16,
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: "absolute",
    right: 1,
    top: 1,
    borderRadius: 10,
    width: 12,
    height: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 7,
    fontWeight: "bold",
  },
});
