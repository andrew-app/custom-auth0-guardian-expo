import type { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  /**
    * Initializes the Auth0 Guardian client with the provided guardian URL.
    * @param guardianUrl - The URL of the Auth0 Guardian server for your tenant.
    * @returns A promise that resolves when the initialization is complete, or rejects if unsuccessful initialization.
  */
  initialize(guardianUrl: string): Promise<void>;
  /**
    * Enrol device for Auth0 Guardian.
    * @returns A promise that resolves to a boolean indicating if enrollment was successful.
  */
  enroll(enrollmentURI: string, platformPushNotificationToken: string): Promise<boolean>;
  /**
    * Get enrollment information for the device.
    * @returns A promise that resolves to the device id if enrolled.
  */
  getEnrollment(): Promise<string | null>;
  /**
    * Unenroll device from Auth0 Guardian.
    * @returns A promise that resolves when the unenrollment is complete.
  */
  unenroll(): Promise<void>;
  /**
    * Get the TOTP (Time-based One-Time Password) for the enrolled device.
    * @returns A promise that resolves to the TOTP string.
  */
  getTOTP(): Promise<string>;
  /**
    * Accept the current authentication request.
    * @returns A void promise that resolves when the request is accepted.
  */
  accept(): void;
  /**
    * Reject the current authentication request.
    * @returns A void promise that resolves when the request is rejected.
  */
  reject(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>("NativeAuth0Guardian")
