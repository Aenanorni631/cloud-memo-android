import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageService = {
    saveNote: async (note) => {
        try {
            const existing = await AsyncStorage.getItem('notes');
            const notes = existing ? JSON.parse(existing) : [];
            notes.push(note);
            await AsyncStorage.setItem('notes', JSON.stringify(notes));
        } catch (e) { console.error("Save failed", e); }
    },
    getNotes: async () => {
        const notes = await AsyncStorage.getItem('notes');
        return notes ? JSON.parse(notes) : [];
    }
};
