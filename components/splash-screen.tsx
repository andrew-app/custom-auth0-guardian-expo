import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";
export const SplashScreen = () => {
    return (
        <SafeAreaView>
            <ThemedView>
                <ThemedText type="title">Splash Screen</ThemedText>
                <ThemedText>Welcome to the app! This is the splash screen.</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}