export const LocalStorage = {
    saveNote: (note) => {
        const existingNotes = JSON.parse(localStorage.getItem('notebook_notes') || '[]');
        existingNotes.push(note);
        localStorage.setItem('notebook_notes', JSON.stringify(existingNotes));
    },
    getNotes: () => {
        return JSON.parse(localStorage.getItem('notebook_notes') || '[]');
    },
    saveSettings: (settings) => {
        localStorage.setItem('app_settings', JSON.stringify(settings));
    },
    getSettings: () => {
        return JSON.parse(localStorage.getItem('app_settings') || '{}');
    }
};
