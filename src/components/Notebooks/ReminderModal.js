import React, { useState } from 'react';

export default function ReminderModal({ isOpen, onClose, onSave }) {
    const [date, setDate] = useState('');

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 3000
        }}>
            <div style={{ background: '#1a1a2e', padding: '20px', borderRadius: '10px', width: '80%', border: '1px solid #4da6ff' }}>
                <h3 style={{ color: '#4da6ff' }}>Set Follow-up Reminder</h3>
                <input 
                    type="datetime-local" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} 
                />
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button onClick={onClose} style={{ background: 'none', color: 'white', border: 'none' }}>Cancel</button>
                    <button 
                        onClick={() => onSave(date)}
                        style={{ background: '#4da6ff', border: 'none', padding: '10px 15px', borderRadius: '5px', color: 'white' }}
                    >Save Reminder</button>
                </div>
            </div>
        </div>
    );
}
