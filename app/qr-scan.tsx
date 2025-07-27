import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect } from "react";
const QRScanScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        const requestCameraPermission = async () => {
            const { status } = await requestPermission();
            if (status !== 'granted') {
                console.warn('Camera permission not granted');
            }
        };

        requestCameraPermission();
    },[]);

    if (!permission) {
        return null;
    }

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
        <ThemedText type="title">QR Scan</ThemedText>
        <ThemedText>Scan the QR code to get started.</ThemedText>
        {
            !permission.granted ? (
                <ThemedText type="default">Camera permission is not granted.</ThemedText>
            ) :
            <CameraView
                style={{ flex: 1, width: '100%' }}
                facing="back"
                barcodeScannerSettings={{
                    barcodeTypes: ['qr'],
                }}
                onBarcodeScanned={(event) => {
                    console.log('QR Code scanned:', event.data);
                }}
            />
        }
        </ThemedView>
    );
}

export default QRScanScreen;