import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = () => {
    const isRegistered = false; // Replace with actual registration check logic
   
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