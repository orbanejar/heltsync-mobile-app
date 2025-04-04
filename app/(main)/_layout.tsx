import React, { useState } from "react";
import { Tabs } from "expo-router";
import { Link } from "expo-router";
import { Colors, Icons } from "@/config";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AuthContent from "@/components/authentication-content";

const TabsLayout = () => {
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <AuthContent>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: styles.headerStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle, // Center the tab labels
          tabBarIconStyle: styles.tabBarIconStyle, // Center the tab icons
          headerTitleAlign: "left",
          headerTitle: () => (
            <Image
              source={Icons.longLogo}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Image
                  source={Icons.bell}
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
                    source={Icons.gridAdd}
                    style={styles.headerIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Link>
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarActiveTintColor: Colors.primary,
            tabBarIcon: ({ size, focused }) => (
              <Image
                source={focused ? Icons.homeActiveTab : Icons.homeTab}
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="daily-feeds/index"
          options={{
            title: "Daily Feeds",
            tabBarActiveTintColor: Colors.primary,
            tabBarIcon: ({ size, focused }) => (
              <Image
                source={
                  focused ? Icons.dailyFeedsActiveTab : Icons.dailyFeedsTab
                }
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shop-online/index"
          options={{
            title: "Shop Online",
            tabBarActiveTintColor: Colors.primary,
            tabBarIcon: ({ size, focused }) => (
              <Image
                source={
                  focused ? Icons.shopOnlineActiveTab : Icons.shopOnlineTab
                }
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="activities/index"
          options={{
            title: "Activities",
            tabBarActiveTintColor: Colors.primary,
            tabBarIcon: ({ size, focused }) => (
              <Image
                source={
                  focused ? Icons.activitiesActiveTab : Icons.activitiesTab
                }
                style={{ width: size, height: size }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tabs>
    </AuthContent>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabBarStyle: {
    height: 70,
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center", // Center the label text
  },
  tabBarIconStyle: {
    alignSelf: "center", // Center the icons horizontally
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
