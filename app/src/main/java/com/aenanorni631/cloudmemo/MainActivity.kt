package com.aenanorni631.cloudmemo

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.aenanorni631.cloudmemo.databinding.ActivityMainBinding
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.textfield.TextInputEditText

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val noteEditText = findViewById<TextInputEditText>(R.id.noteEditText)
        val uploadButton = findViewById<FloatingActionButton>(R.id.uploadButton)

        uploadButton.setOnClickListener {
            val text = noteEditText.text.toString()
            if (text.isNotEmpty()) {
                // We will add the Google Drive upload logic here next
                Toast.makeText(this, "Uploading to Drive...", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Please enter some text", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
