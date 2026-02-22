import React, { useState } from 'react';
import NotebookDashboard from './src/components/Notebooks/NotebookDashboard';
import AIChatPanel from './src/components/AIChat/AIChatPanel';
import './src/styles/theme.css';

export default function App() {
    const [view, setView] = useState('notebooks');
    const [isChatVisible, setIsChatVisible] = useState(false);

    return (
        <div className="app-container">
            <nav style={{ padding: '15px', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ margin: 0, fontSize: '20px' }}>Cloud Memo</h1>
                <button style={{ background: 'none', border: 'none', color: 'white' }}>🎤 Record</button>
            </nav>
            <NotebookDashboard />
            <AIChatPanel isVisible={isChatVisible} closeChat={() => setIsChatVisible(false)} />
            <button className="floating-ai-btn" onClick={() => setIsChatVisible(true)}>✨</button>
        </div>
    );
}
