import React, { useState } from 'react';
import Settings from './src/components/Settings/Settings';
import NotebookDashboard from './src/components/Notebooks/NotebookDashboard';
import './src/styles/theme.css';

export default function App() {
    const [theme, setTheme] = useState('midnight-blue');
    const [view, setView] = useState('notebooks');
    return (
        <div className={`app ${theme}`}>
            <nav style={{ padding: '15px', background: 'rgba(0,0,0,0.3)', display: 'flex', gap: '20px' }}>
                <button onClick={() => setView('notebooks')} style={{ color: view === 'notebooks' ? '#4da6ff' : 'white', background: 'none', border: 'none' }}>Notebooks</button>
                <button onClick={() => setView('settings')} style={{ color: view === 'settings' ? '#4da6ff' : 'white', background: 'none', border: 'none' }}>Settings</button>
            </nav>
            {view === 'notebooks' ? <NotebookDashboard /> : <Settings changeTheme={setTheme} />}
            <button className="floating-ai-btn" style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#4da6ff', borderRadius: '50%', width: '60px', height: '60px', border: 'none' }}>✨</button>
        </div>
    );
}
