import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Link } from "expo-router";
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
            source={require("../../assets/icons/header-logo.png")}
            style={{ width: undefined, height: 120, aspectRatio: 1 }}
            resizeMode="contain"
          />
        ),
        headerRight: () => (
          <>
            <TouchableOpacity>
              <MaterialIcons
                name="notifications"
                size={34}
                color={Colors.primary}
                style={{ marginRight: 16 }}
              />
              {notificationCount > 0 && (
                <View
                  style={{
                    position: "absolute",
                    right: 18,
                    top: 3,
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
            <Link href="/menu" asChild>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/grid-add.png")}
                  style={{ width: 30, height: 30, marginRight: 16 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Link>
          </>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/tabs/home-active.png")
                  : require("../../assets/icons/tabs/home.png")
              }
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="daily-feeds/index"
        options={{
          title: "Daily Feeds",
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/tabs/daily-feeds-active.png")
                  : require("../../assets/icons/tabs/daily-feeds.png")
              }
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="shop-online/index"
        options={{
          title: "Shop Online",
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/tabs/shop-online-active.png")
                  : require("../../assets/icons/tabs/shop-online.png")
              }
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="activities/index"
        options={{
          title: "Activities",
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/tabs/activities-active.png")
                  : require("../../assets/icons/tabs/activities.png")
              }
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
