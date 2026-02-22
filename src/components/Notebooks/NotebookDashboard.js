import React from 'react';
export default function NotebookDashboard() {
    return (
        <div className="notebook-dashboard" style={{ padding: '20px' }}>
            <h2>My Notebooks</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button style={{ background: '#4da6ff', border: 'none', padding: '10px', borderRadius: '5px' }}>Daily Thoughts</button>
                <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}>Work</button>
            </div>
            <div style={{ border: '1px solid #444', padding: '15px', borderRadius: '10px' }}>
                <p>Categorize your notes here. Titled tabs enabled.</p>
                <input type="file" id="file-upload" hidden />
                <button onClick={() => document.getElementById('file-upload').click()} style={{ color: '#4da6ff', background: 'none', border: '1px solid #4da6ff', padding: '5px 10px', cursor: 'pointer' }}>
                    📎 Attach PDF/File
                </button>
            </div>
        </div>
    );
}
