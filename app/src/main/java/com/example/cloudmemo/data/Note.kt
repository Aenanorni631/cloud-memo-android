package com.aenanorni631.cloudmemo.data

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "notes_table")
data class Note(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val title: String,
    val content: String,
    val timestamp: Long = System.currentTimeMillis(),
    val category: String = "General"
)
// Build Check Sat Feb 21 15:58:06 MST 2026
