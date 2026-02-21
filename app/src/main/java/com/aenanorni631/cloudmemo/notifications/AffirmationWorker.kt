package com.aenanorni631.cloudmemo.notifications

import android.content.Context
import androidx.work.Worker
import androidx.work.WorkerParameters

class AffirmationWorker(context: Context, params: WorkerParameters) : Worker(context, params) {
    override fun doWork(): Result {
        // Affirmation logic goes here
        return Result.success()
    }
}
