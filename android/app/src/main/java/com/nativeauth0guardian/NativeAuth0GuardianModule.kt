package com.nativeauth0guardian

import android.os.Build
import android.provider.Settings.Secure
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import androidx.core.net.toUri
import com.auth0.android.guardian.sdk.CurrentDevice
import com.auth0.android.guardian.sdk.Guardian
import kotlin.concurrent.Volatile

class NativeAuth0GuardianModule(reactContext: ReactApplicationContext) : NativeAuth0GuardianSpec(reactContext) {

    override fun getName() = NAME

    override fun initialize(guardianUrl: String?, promise: Promise?) {
        runCatching {
            val url = guardianUrl?.toUri()

            url?.let {
                guardian = Guardian.Builder().url(url).build()
            }
        }.onSuccess {
            Log.i(TAG, "Guardian initialised successfully")
            Log.i(TAG, deviceModel)
            promise?.resolve(null)
        }.onFailure { exception ->
            promise?.reject(
                "GUARDIAN_INIT_ERROR",
                exception
            )
        }
    }

    override fun enroll(enrollmentURI: String?, pushToken: String?, promise: Promise?) {
        Log.i(TAG, "Enrolling device...")
//        val device = CurrentDevice(reactContext, pushToken, )
        runCatching {
            enrollmentURI?.let {
//                guardian?.enroll()
            }
        }
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

    override fun getTOTP(promise: Promise?) {
        Log.i(TAG, "Getting TOTP...")
    }

    companion object {
        private const val TAG = "NativeAuth0GuardianModule"
        const val NAME = "NativeAuth0Guardian"
        @Volatile
        private var guardian: Guardian? = null
        @Volatile
        private var reactContext: ReactApplicationContext? = null
        private val deviceModel = Build.MODEL
    }
}
