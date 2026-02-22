export default function useSpeechToText() {
    let recognition;
    if ('webkitSpeechRecognition' in window) {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
    } else {
        console.warn("Speech recognition not supported in this browser.");
    }

    const startRecording = () => { if(recognition) recognition.start(); };
    const stopRecording = () => { if(recognition) recognition.stop(); };

    return { startRecording, stopRecording };
}
