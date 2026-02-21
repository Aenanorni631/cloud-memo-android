package com.example.cloudmemo.notifications

import android.content.Context
import androidx.work.Worker
import androidx.work.WorkerParameters

class AffirmationWorker(context: Context, params: WorkerParameters) : Worker(context, params) {
    override fun doWork(): Result {
        val helper = NotificationHelper(applicationContext)
        val quotes = listOf(
            "You are capable of amazing things.",
            "Today is a fresh start.",
            "Focus on the progress, not the perfection."
        )
        helper.showNotification("Morning Affirmation", quotes.random())
        return Result.success()
    }
}
