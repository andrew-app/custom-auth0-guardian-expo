import { type ErrorBoundaryProps } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from './themed-text';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <ThemedText>{error.message}</ThemedText>
    </SafeAreaView>
  );
}