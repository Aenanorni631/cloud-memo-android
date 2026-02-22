import React from 'react';
export default function AIChatPanel({ isVisible, closeChat }) {
    if (!isVisible) return null;
    return (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '85%', height: '100%', background: '#1a1a2e', borderLeft: '1px solid #4da6ff', zIindex: 2000, padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#4da6ff' }}>AI Assistant</span>
                <button onClick={closeChat} style={{ color: 'white', background: 'none', border: 'none', fontSize: '20px' }}>×</button>
            </div>
            <p style={{ marginTop: '20px' }}>How can I help you summarize your notes today?</p>
        </div>
    );
}
