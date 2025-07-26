
import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export const GetStartedScreen = () => {
    return (
              <ThemedView>
                <ThemedText type="title">Get Started</ThemedText>
                <HelloWave />
              </ThemedView>
    );
}

export default GetStartedScreen;