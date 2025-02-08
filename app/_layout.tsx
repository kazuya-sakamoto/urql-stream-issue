import { Stack } from "expo-router";
import { View } from "react-native";
import { UrqlProvider } from "@/src/providers/UrqlProvider";
import { TestQueryComponent } from "@/components/TestQuery";

export default function RootLayout() {
  return (
    <UrqlProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TestQueryComponent />
      </View>
    </UrqlProvider>
  );
}
