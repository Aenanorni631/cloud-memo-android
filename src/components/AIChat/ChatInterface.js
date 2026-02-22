export default function ChatInterface({ isVisible, toggleChat }) {
    if (!isVisible) return null;

    const exportToPDF = () => {
        alert("Exporting current chat log to PDF...");
        // Logic to render chat history into a downloadable PDF
    };

    const toggleVoiceMode = () => {
        alert("Voice chat mode activated. Listening...");
    };

    return (
        <div className="chat-interface-window">
            <div className="chat-header">
                <h3>AI Assistant</h3>
                <div className="chat-actions">
                    <button onClick={exportToPDF} title="Export to PDF">📄</button>
                    <button onClick={toggleChat} title="Close Chat">✖</button>
                </div>
            </div>
            
            <div className="chat-history">
                <div className="message ai-message">
                    Hello! I can summarize your notes, suggest notebook structures, or just brainstorm with you. How can I help?
                </div>
            </div>

            <div className="chat-input-area">
                <button className="voice-btn" onClick={toggleVoiceMode} title="Hold to speak">🎤</button>
                <input type="text" placeholder="Type a message..." />
                <button className="send-btn">Send</button>
            </div>
        </div>
    );
}
