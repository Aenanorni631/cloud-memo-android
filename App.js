import React, { useState, useEffect } from 'react';
import Settings from './src/components/Settings/Settings';
import FloatingAssistant from './src/components/AIChat/FloatingAssistant';
import './src/styles/theme.css';

export default function App() {
    const [theme, setTheme] = useState('midnight-blue');
    const [isChatVisible, setIsChatVisible] = useState(false);

    useEffect(() => {
        document.body.className = `theme-${theme}`;
    }, [theme]);

    const toggleChat = () => setIsChatVisible(!isChatVisible);

    return (
        <div className="app-container">
            <nav style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)' }}>
                <h1>Cloud Memo v1.0</h1>
            </nav>
            <main style={{ padding: '1rem', flex: 1 }}>
                <Settings changeTheme={setTheme} />
                <p style={{ marginTop: '2rem', color: '#4da6ff', fontWeight: 'bold' }}>
                    System check: Core UI successfully loaded. Old app overwritten.
                </p>
            </main>
            <FloatingAssistant toggleChat={toggleChat} />
        </div>
    );
}
