package com.aenanorni631.cloudmemo.sync

import android.content.Context
import androidx.work.Worker
import androidx.work.WorkerParameters

class CloudSyncWorker(context: Context, params: WorkerParameters) : Worker(context, params) {
    override fun doWork(): Result {
        // Stubs for Google Drive and Calendar sync
        return Result.success()
    }
}
