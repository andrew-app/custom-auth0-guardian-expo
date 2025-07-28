import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  getConfig(): Promise<{ guardianUrl: string }>;
  initialize(): Promise<void>;
  enroll(enrollmentURI: string, pushToken: string): Promise<void>;
  getEnrollment(): Promise<string>;
  unenroll(): Promise<void>;
  accept(): void;
  reject(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>("NativeAuth0Guardian")
