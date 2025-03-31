import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const TabsLayout = () => {
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: styles.headerStyle,
        headerTitle: () => (
          <Image
            source={require("../../assets/icons/header/long-logo.png")}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        ),
        headerRight: () => (
          <>
            <TouchableOpacity>
              <Image
                  source={require("../../assets/icons/header/bell.png")}
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
            <Link href="/menu" asChild>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/header/grid-add.png")}
                  style={styles.headerIcon}
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

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerLogo: {
    width: undefined,
    height: 120,
    aspectRatio: 1,
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  notificationBadge: {
    position: "absolute",
    right: 17,
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

export default TabsLayout;