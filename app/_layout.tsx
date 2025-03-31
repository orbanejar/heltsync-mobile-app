export const unstable_settings = {
  initialRouteName: "(main)",
};

import React, { useState } from "react";
import { Stack } from "expo-router";
import { useNavigation } from "expo-router";
import HeaderRight from "../components/header-right";
import HeaderBackground from "../components/header-background-colored";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  const navigation = useNavigation();
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen
        name="menu/index"
        options={{
          headerShown: true,
          headerTitle: "Menu",
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
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
