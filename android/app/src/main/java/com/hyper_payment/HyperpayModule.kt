package com.hyper_payment

import android.content.ContentValues.TAG
import android.provider.SyncStateContract.Constants
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.oppwa.mobile.connect.checkout.dialog.CheckoutConstants.PaymentBrands
import com.oppwa.mobile.connect.checkout.meta.CheckoutActivityResult
import com.oppwa.mobile.connect.checkout.meta.CheckoutActivityResultContract
import com.oppwa.mobile.connect.checkout.meta.CheckoutSettings
import com.oppwa.mobile.connect.checkout.meta.CheckoutSkipCVVMode
import com.oppwa.mobile.connect.exception.PaymentError
import com.oppwa.mobile.connect.provider.Connect
import com.oppwa.mobile.connect.provider.Transaction
import com.oppwa.mobile.connect.provider.TransactionType



class HyperpayModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    //    val checkoutId = "1F07A84F28D4949D90AE5308F5230CEB.uat01-vm-tx03"
    override fun getName() = "Hyperpay"

    @ReactMethod
    fun ReadyUI(checkoutId: String, paymentType: String) {
        Log.d(TAG, "checkoutId$checkoutId")
        val checkoutSettings = createCheckoutSettings(checkoutId)



        MainActivity.checkoutLauncher.launch(checkoutSettings)

    }



    private fun createCheckoutSettings(checkoutId: String): CheckoutSettings {

        val PAYMENT_BRANDS = linkedSetOf("VISA", "MASTER")

        return CheckoutSettings(
            checkoutId, PAYMENT_BRANDS,
            Connect.ProviderMode.TEST
        )
                 /* Set componentName if you want to receive callbacks from the checkout */
    }



    }

        fun handleCheckoutActivityResult(result: CheckoutActivityResult) {
            var resourcePath: String? = null
            var isAsyncCallbackReceived = false
            if (result.isCanceled) {
                return
            }

            if (result.isErrored) {
                val error: PaymentError? = result.paymentError

                return
            }

            /* Transaction completed */
            val transaction: Transaction? = result.transaction

            resourcePath = result.resourcePath

            /* Check the transaction type */
            if (transaction != null) {
                if (transaction.transactionType == TransactionType.SYNC) {
                    /* Check the status of synchronous transaction */
//                requestPaymentStatus(resourcePath!!)
                } else if (isAsyncCallbackReceived) {
                    /* Asynchronous transaction is processed in the onNewIntent()
                       NOTE: Prior API level 29 the onNewIntent() will be called before ActivityResultCallback */
//                requestPaymentStatus(resourcePath!!)
                }
            }
            return ;
        }


@ReactMethod
fun CustomUI() {

    Log.d(TAG, "CustomUI")

}