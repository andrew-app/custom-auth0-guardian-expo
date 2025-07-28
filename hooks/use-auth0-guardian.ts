import NativeAuth0Guardian from "@/specs/NativeAuth0Guardian";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAuth0Guardian = () => {
    const initialize = () => useSuspenseQuery({
        queryKey: ["auth0Guardian", "initialize"],
        queryFn: () => NativeAuth0Guardian.initialize(process.env.EXPO_PUBLIC_AUTH0_GUARDIAN_URL || ""),
        staleTime: Infinity,
    })
    return {
        initialize
    }
};