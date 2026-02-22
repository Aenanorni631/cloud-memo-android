import React from 'react';
export default function Settings({ changeTheme }) {
    return (
        <div className="settings-panel" style={{ padding: '1rem' }}>
            <h2>App Settings</h2>
            <div className="setting-group" style={{ marginTop: '1rem' }}>
                <h3>UI Theme</h3>
                <select onChange={(e) => changeTheme(e.target.value)} defaultValue="midnight-blue" style={{ padding: '0.5rem', borderRadius: '4px' }}>
                    <option value="midnight-blue">Midnight Blue (Default)</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </div>
        </div>
    );
}
