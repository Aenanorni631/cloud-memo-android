export default function FloatingAssistant({ toggleChat }) {
    return (
        <button className="floating-ai-btn" onClick={toggleChat} title="Open AI Assistant">
            ✨
        </button>
    );
}
