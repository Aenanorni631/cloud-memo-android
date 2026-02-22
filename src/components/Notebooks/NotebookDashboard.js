import React from 'react';
export default function NotebookDashboard() {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>My Notebooks</h2>
                <button style={{ background: '#4caf50', border: 'none', padding: '8px 12px', borderRadius: '5px', color: 'white' }}>📄 Export PDF</button>
            </div>
            <div style={{ marginTop: '20px', border: '1px solid #444', padding: '15px', borderRadius: '10px' }}>
                <p>Welcome to Cloud Memo v1.0. Start by creating a new note or using the AI assistant.</p>
                <button style={{ color: '#4da6ff', background: 'none', border: '1px solid #4da6ff', padding: '5px 10px' }}>📎 Attach File</button>
            </div>
        </div>
    );
}
