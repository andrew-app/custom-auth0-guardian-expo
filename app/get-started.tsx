import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const GetStartedScreen = () => {
  const router = useRouter();
    return (
      <SafeAreaView>
        <ThemedView>
          <ThemedText type="title">Get Started</ThemedText>
          <ThemedText type="default">
            Scan the QR code to get started with the app.
          </ThemedText>
          <Button title="Scan QR Code" onPress={() => router.push('/qr-scan')} />
        </ThemedView>
      </SafeAreaView>
    );
}

export default GetStartedScreen;