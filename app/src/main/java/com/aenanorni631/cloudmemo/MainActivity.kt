package com.aenanorni631.cloudmemo

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.aenanorni631.cloudmemo.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // UI elements linked safely via ViewBinding
        binding.noteEditText.hint = "Ready for notes..."
        binding.uploadButton.setOnClickListener {
            // Upload logic goes here
        }
    }
}
