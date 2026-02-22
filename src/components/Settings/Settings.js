import React from 'react';
export default function Settings({ changeTheme }) {
    return (
        <div style={{ padding: '20px' }}>
            <h2>App Settings</h2>
            <select onChange={(e) => changeTheme(e.target.value)}>
                <option value="midnight-blue">Midnight Blue</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
        </div>
    );
}
