import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import NativeAuth0Guardian from "@/specs/NativeAuth0Guardian";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const RootIndex = () => {
    const isRegistered = false; // Replace with actual registration check logic
    useEffect(() => {
        const initialize = async () => {
            await NativeAuth0Guardian.initialize();
        };
        initialize();
    }, [])
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
export default RootIndex;