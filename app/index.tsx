import { SplashScreen } from "@/components/splash-screen";
import { useAuth0Guardian } from "@/hooks/use-auth0-guardian";
import { Redirect } from "expo-router";

export const RootIndex = () => {
    const isRegistered = false; // Replace with actual registration check logic
    const {initialize} = useAuth0Guardian();
    initialize();
    
    if (!isRegistered) return <Redirect href="/get-started" />;

    if (isRegistered) return <Redirect href="/registered/home" />;

    return (
        <SplashScreen  />
    );
}
export default RootIndex;