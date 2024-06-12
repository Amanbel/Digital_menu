import { Stack } from "expo-router";

export default function () {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, statusBarColor: "black" }}
      />
      <Stack.Screen
        name="addRestaurants.tsx"
        options={{ headerShown: false, statusBarColor: "black" }}
      />
    </Stack>
  );
}
