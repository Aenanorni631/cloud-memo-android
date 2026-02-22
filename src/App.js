import React, { useState, useEffect } from 'react';
import NotebookDashboard from './components/Notebooks/NotebookDashboard';
import Settings from './components/Settings/Settings';
import FloatingAssistant from './components/AIChat/FloatingAssistant';
import ChatInterface from './components/AIChat/ChatInterface';
import './styles/theme.css';

export default function App() {
    const [theme, setTheme] = useState('midnight-blue');
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [currentView, setCurrentView] = useState('notebooks'); // Simple navigation state

    // Apply global theme class to body
    useEffect(() => {
        document.body.className = `theme-${theme}`;
    }, [theme]);

    const toggleChat = () => setIsChatVisible(!isChatVisible);

    return (
        <div className="app-container">
            <nav className="main-nav" style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', marginBottom: '1rem' }}>
                <button onClick={() => setCurrentView('notebooks')} style={{ marginRight: '1rem' }}>Notebooks</button>
                <button onClick={() => setCurrentView('settings')}>Settings</button>
            </nav>

            <main className="content-area" style={{ padding: '1rem' }}>
                {currentView === 'notebooks' && <NotebookDashboard />}
                {currentView === 'settings' && <Settings changeTheme={setTheme} />}
            </main>

            <FloatingAssistant toggleChat={toggleChat} />
            <ChatInterface isVisible={isChatVisible} toggleChat={toggleChat} />
        </div>
    );
}
