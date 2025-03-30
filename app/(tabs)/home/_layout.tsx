import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="hospital-services"
        options={{ title: "Hospital Services", headerShown: false }}
      />
    </Stack>
  );
}
