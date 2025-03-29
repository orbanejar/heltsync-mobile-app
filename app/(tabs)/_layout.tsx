import React, { useState } from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

const TabsLayout = () => {
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
          borderBottomWidth: 0, // Remove border at the bottom
        },
        headerTitle: () => (
          <Image
            source={require("../../assets/header-logo.png")}
            style={{ width: 120, height: 40 }}
          />
        ),
        headerRight: () => (
          <>
            <TouchableOpacity>
              <MaterialIcons
                name="notifications"
                size={32}
                color={Colors.primary}
                style={{ marginRight: 10 }}
              />
              {notificationCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 2,
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
            <TouchableOpacity>
              <MaterialIcons
                name="app-registration"
                size={32}
                color={Colors.primary}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="daily-feeds/index"
        options={{
          title: "Daily Feeds",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="rss-feed" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="shop-online/index"
        options={{
          title: "Shop Online",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="activities/index"
        options={{
          title: "Activities",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="directions-run" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
