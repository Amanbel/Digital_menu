import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarColor: "black" }}
      />
      <Stack.Screen name="(restaurants)" options={{ headerShown: false }} />
    </Stack>
  );
}
