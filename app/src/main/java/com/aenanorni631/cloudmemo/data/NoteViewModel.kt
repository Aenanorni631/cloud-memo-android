package com.aenanorni631.cloudmemo.data

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class NoteViewModel : ViewModel() {
    // Stub implementation to fix build errors
    fun insert(note: String) {
        viewModelScope.launch {
            // suspend db.insert() goes here
        }
    }

    fun delete(note: String) {
        viewModelScope.launch {
            // suspend db.delete() goes here
        }
    }
}
