import React, { useState } from "react";
import { Stack } from "expo-router";
import { useNavigation } from "expo-router";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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
          headerBackground: () => {
            return <ImageBackground
              source={require("../assets/menu-header-bg-image.png")}
              style={styles.headerBackground} />
          },
          headerRight: () => (
            <>
            <TouchableOpacity>
              <MaterialIcons
                name="notifications"
                size={34}
                color={Colors.primary}
              />
              {notificationCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: 3,
                    top: 4,
                    backgroundColor: "red",
                    borderRadius: 10,
                    width: 12,
                    height: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 7, fontWeight: "bold" }}
                  >
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <ImageBackground
                source={require("../assets/icons/menu/home.png")}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
            >
              <ImageBackground
                source={require("../assets/icons/menu/chat.png")}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            </>
          )
        }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  headerBackground: {
    height: "100%",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.white
  },
  iconButton: {
    marginLeft: 16,
  },
});
