import React, { useState } from 'react';
import Settings from './src/components/Settings/Settings';
import NotebookDashboard from './src/components/Notebooks/NotebookDashboard';
import AIChatPanel from './src/components/AIChat/AIChatPanel';
import useSpeechToText from './src/hooks/useSpeechToText';
import { GoogleService } from './src/services/GoogleService';
import './src/styles/theme.css';

export default function App() {
    const [theme, setTheme] = useState('midnight-blue');
    const [view, setView] = useState('notebooks');
    const [isChatVisible, setIsChatVisible] = useState(false);
    const { isListening, startSpeech, stopSpeech } = useSpeechToText();

    return (
        <div className={`app ${theme}`}>
            <nav style={{ padding: '15px', background: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <button onClick={() => setView('notebooks')} style={{ color: view === 'notebooks' ? '#4da6ff' : 'white', background: 'none', border: 'none', marginRight: '15px', fontWeight: 'bold' }}>Notebooks</button>
                    <button onClick={() => setView('settings')} style={{ color: view === 'settings' ? '#4da6ff' : 'white', background: 'none', border: 'none' }}>Settings</button>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => GoogleService.syncToDrive([])} style={{ background: '#4da6ff', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '12px' }}>☁️ Sync</button>
                    <button onClick={isListening ? stopSpeech : startSpeech} style={{ color: isListening ? '#ff4d4d' : 'white', background: 'none', border: 'none', fontSize: '18px' }}>
                        {isListening ? '🛑' : '🎤'}
                    </button>
                </div>
            </nav>

            <main style={{ flex: 1 }}>
                {view === 'notebooks' ? <NotebookDashboard /> : <Settings changeTheme={setTheme} />}
            </main>

            <AIChatPanel isVisible={isChatVisible} closeChat={() => setIsChatVisible(false)} />

            <button 
                onClick={() => setIsChatVisible(true)}
                className="floating-ai-btn" 
                style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#4da6ff', borderRadius: '50%', width: '60px', height: '60px', border: 'none', fontSize: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', cursor: 'pointer', zIndex: 1000 }}
            >✨</button>
        </div>
    );
}
