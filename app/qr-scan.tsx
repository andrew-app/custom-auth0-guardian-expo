import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useCameraPermissions } from "@/hooks/use-camera-permissions";
import { CameraView } from 'expo-camera';
const QRScanScreen = () => {
    const {isLoading, permission} = useCameraPermissions();

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: '10%' }}>
        <ThemedText type="title">QR Scan</ThemedText>
        <ThemedText>Scan the QR code to get started.</ThemedText>
        {
            !permission?.granted || isLoading ? (
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