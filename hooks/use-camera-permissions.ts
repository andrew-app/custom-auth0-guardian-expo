import { useQuery } from '@tanstack/react-query';
import { useCameraPermissions as useExpoCameraPermissions } from 'expo-camera';
export const useCameraPermissions = () => {
    const [permission, requestPermission] = useExpoCameraPermissions();
    const cameraPermissionQueryResult = useQuery({
        queryKey: ['permissions', 'camera'],
        queryFn: requestPermission,
        enabled: !permission, // Only run if permission is not yet determined
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity,
    });
    const cameraPermissionResponse = cameraPermissionQueryResult.data || permission;
    return { 
        ...cameraPermissionQueryResult,
        permission: cameraPermissionResponse,
    };
}