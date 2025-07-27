import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';

export const GetStartedScreen = () => {
    return (
      <SafeAreaView>
        <ThemedView>
          <ThemedText type="title">Get Started</ThemedText>
          <ThemedText type="default">
            Scan the QR code to get started with the app.
          </ThemedText>
          <Button screen="qr-scan">
            <ThemedText>Scan QR Code</ThemedText>
          </Button>
        </ThemedView>
      </SafeAreaView>
    );
}

export default GetStartedScreen;