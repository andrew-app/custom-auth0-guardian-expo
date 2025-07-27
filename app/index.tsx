import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Redirect } from "expo-router";
import * as ExpoSplashScreen from 'expo-splash-screen';
import { SafeAreaView } from "react-native-safe-area-context";

ExpoSplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
ExpoSplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const SplashScreen = () => {
    const isRegistered = false; // Change this based on your app's registration logic
   
    if (!isRegistered) return <Redirect href="/get-started" />;

    if (isRegistered) return <Redirect href="/registered/home" />;

    return (
        <SafeAreaView>
        <ThemedView>
        <ThemedText type="title">Splash Screen</ThemedText>
        <ThemedText>Welcome to the app! This is the splash screen.</ThemedText>
        </ThemedView>
        </SafeAreaView>
    );
}
export default SplashScreen;