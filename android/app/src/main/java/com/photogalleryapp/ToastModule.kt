package com.photogalleryapp

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class ToastModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "ToastModule"
    }

    @ReactMethod
    fun showToast(message: String, duration: Int) {
        Toast.makeText(
            reactContext,
            message,
            duration
        ).show()
    }
}