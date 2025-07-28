import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ExpoDevice from "expo-device";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, useColorScheme } from "react-native";
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSyncQueriesExternal } from "react-query-external-sync";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppContent />
        <StatusBar style="auto" />
      </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const AppContent = () => {
  let isRegistered = false;
  useSyncQueriesExternal({
    queryClient,
    socketURL: `http://${process.env.EXPO_PUBLIC_LOCAL_IP_ADDRESS || 'localhost'}:42831`, // Default port for React Native DevTools
    deviceName: Platform?.OS || "web", // Platform detection
    platform: Platform?.OS || "web", // Use appropriate platform identifier
    deviceId: Platform?.OS || "web", // Use a PERSISTENT identifier (see note below)
    isDevice: ExpoDevice.isDevice, // Automatically detects real devices vs emulators
    extraDeviceInfo: {
      // Optional additional info about your device
      appVersion: "1.0.0",
      // Add any relevant platform info
    },
    enableLogs: true,
    envVariables: {
      NODE_ENV: process.env.NODE_ENV, // Set your environment variables
      // Add any private environment variables you want to monitor
      // Public environment variables are automatically loaded
  }});
  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Protected guard={!isRegistered}>
          <Stack.Screen name="get-started" options={{headerShown: false}}/>
          <Stack.Screen name="qr-scan" options={{headerShown: false}}/>
        </Stack.Protected>
        <Stack.Protected guard={isRegistered}>
          <Stack.Screen name="registered" options={{headerShown: false}}/>
        </Stack.Protected>
      </Stack>
  );
}