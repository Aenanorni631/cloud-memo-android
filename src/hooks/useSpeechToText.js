import { useState } from 'react';

export default function useSpeechToText() {
    const [isListening, setIsListening] = useState(false);
    
    const startSpeech = () => {
        setIsListening(true);
        console.log("Speech recognition started...");
        // Web Speech API / Native Bridge logic goes here
    };

    const stopSpeech = () => {
        setIsListening(false);
        console.log("Speech recognition stopped.");
    };

    return { isListening, startSpeech, stopSpeech };
}
