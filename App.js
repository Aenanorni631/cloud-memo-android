import React, { useState } from 'react';
import Settings from './src/components/Settings/Settings';
import './src/styles/theme.css';

export default function App() {
    const [theme, setTheme] = useState('midnight-blue');
    return (
        <div className={`app ${theme}`}>
            <nav style={{ padding: '15px', background: 'rgba(0,0,0,0.3)' }}><h1>Cloud Memo v1.0</h1></nav>
            <Settings changeTheme={setTheme} />
            <button className="floating-ai-btn">✨</button>
        </div>
    );
}
