import React, { useState } from 'react';

export default function AIChatPanel({ isVisible, closeChat }) {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'How can I help with your notes today?' }
    ]);
    const [input, setInput] = useState('');

    if (!isVisible) return null;

    const sendMessage = () => {
        if (!input.trim()) return;
        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        // AI logic/API call will be layered here in later chunks
    };

    return (
        <div className="ai-chat-overlay" style={{
            position: 'fixed', top: 0, right: 0, width: '85%', height: '100%',
            background: '#1a1a2e', borderLeft: '1px solid #4da6ff', zIndex: 2000,
            display: 'flex', flexDirection: 'column', transition: '0.3s'
        }}>
            <header style={{ padding: '15px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#4da6ff' }}>AI Assistant</span>
                <button onClick={closeChat} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px' }}>×</button>
            </header>
            
            <div style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ 
                        marginBottom: '10px', 
                        textAlign: msg.role === 'user' ? 'right' : 'left' 
                    }}>
                        <div style={{ 
                            display: 'inline-block', padding: '10px', borderRadius: '10px',
                            background: msg.role === 'user' ? '#4da6ff' : '#252545',
                            maxWidth: '80%'
                        }}>
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ padding: '15px', borderTop: '1px solid #333', display: 'flex' }}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask AI about your notes..." 
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: 'none', marginRight: '10px' }}
                />
                <button onClick={sendMessage} style={{ background: '#4da6ff', border: 'none', padding: '10px', borderRadius: '5px' }}>Send</button>
            </div>
        </div>
    );
}
