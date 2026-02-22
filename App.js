import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
    const [isChatVisible, setIsChatVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.title}>Cloud Memo v1.0</Text>
                <TouchableOpacity><Text style={styles.recordBtn}>🎤 Record</Text></TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.subtitle}>My Notebooks</Text>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Welcome back. Your offline notes are ready.</Text>
                    <TouchableOpacity style={styles.exportBtn}><Text style={{color: '#fff'}}>📄 Export PDF</Text></TouchableOpacity>
                </View>
            </View>

            {isChatVisible && (
                <View style={styles.chatOverlay}>
                    <View style={styles.chatHeader}>
                        <Text style={styles.chatTitle}>AI Assistant</Text>
                        <TouchableOpacity onPress={() => setIsChatVisible(false)}><Text style={{color: '#fff', fontSize: 24}}>×</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.chatBody}>How can I help you today?</Text>
                </View>
            )}

            <TouchableOpacity 
                style={styles.fab} 
                onPress={() => setIsChatVisible(true)}>
                <Text style={styles.fabIcon}>✨</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#191970' },
    nav: { padding: 20, backgroundColor: 'rgba(0,0,0,0.3)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
    recordBtn: { color: '#4da6ff' },
    content: { padding: 20 },
    subtitle: { color: '#fff', fontSize: 18, marginBottom: 15 },
    card: { backgroundColor: '#252545', padding: 20, borderRadius: 10, borderLeftWidth: 4, borderLeftColor: '#4da6ff' },
    cardText: { color: '#fff', marginBottom: 15 },
    exportBtn: { backgroundColor: '#4caf50', padding: 10, borderRadius: 5, alignSelf: 'flex-start' },
    fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#4da6ff', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5 },
    fabIcon: { fontSize: 24 },
    chatOverlay: { position: 'absolute', top: 0, right: 0, bottom: 0, width: '85%', backgroundColor: '#1a1a2e', padding: 20, zIndex: 1000, borderLeftWidth: 1, borderLeftColor: '#4da6ff' },
    chatHeader: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 10 },
    chatTitle: { color: '#4da6ff', fontWeight: 'bold' },
    chatBody: { color: '#fff', marginTop: 20 }
});
