package com.nativeauth0guardian

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class NativeAuth0GuardianModule(reactContext: ReactApplicationContext) : NativeAuth0GuardianSpec(reactContext) {
    override fun getName() = NAME

    override fun initialize() {
        Log.i(TAG, "Initialise Guardian")
    }

    override fun getConfig(promise: Promise?) {
        Log.i(TAG, "Get Config")
    }
    override fun initialize(promise: Promise?) {
        Log.i(TAG, "Initialise Guardian")
    }

    override fun enroll(enrollmentURI: String?, pushToken: String?, promise: Promise?) {
        Log.i(TAG, "Enrolling device...")
    }

    override fun getEnrollment(promise: Promise?) {
        Log.i(TAG, "Getting Enrollment Data...")
    }

    override fun unenroll(promise: Promise?) {
        Log.i(TAG, "Unenrolling device...")
    }

    override fun accept() {
        Log.i(TAG, "Login Request Accepted.")
    }

    override fun reject() {
        Log.i(TAG, "Login Request Rejected.")
    }

    companion object {
        private const val TAG = "NativeAuth0GuardianModule"
        const val NAME = "NativeAuth0Guardian"
    }
}
