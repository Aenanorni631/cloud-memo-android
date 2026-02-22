import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
    const [isChatVisible, setIsChatVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header / Nav */}
            <View style={styles.nav}>
                <Text style={styles.title}>CloudMemo v1.0</Text>
                <TouchableOpacity onPress={() => alert('Recording...')}>
                    <Text style={styles.recordBtn}>🎤 Record</Text>
                </TouchableOpacity>
            </View>

            {/* Notebook Dashboard */}
            <ScrollView style={styles.content}>
                <View style={styles.headerRow}>
                    <Text style={styles.subtitle}>My Notebooks</Text>
                    <TouchableOpacity style={styles.summaryBtn} onPress={() => alert('AI Summarizing...')}>
                        <Text style={{color: '#fff', fontSize: 12}}>⚡ AI Summarize</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Daily Thoughts</Text>
                    <Text style={styles.cardText}>Categorize your notes here. Titled tabs enabled.</Text>
                    <View style={styles.cardActions}>
                        <TouchableOpacity style={styles.attachBtn}><Text style={{color: '#4da6ff'}}>📎 Attach</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.exportBtn} onPress={() => alert('Exporting PDF...')}><Text style={{color: '#fff'}}>📄 PDF</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* AI Assistant Slide-out */}
            {isChatVisible && (
                <View style={styles.chatOverlay}>
                    <View style={styles.chatHeader}>
                        <Text style={styles.chatTitle}>AI Assistant</Text>
                        <TouchableOpacity onPress={() => setIsChatVisible(false)}><Text style={{color: '#fff', fontSize: 24}}>×</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.chatBody}>How can I help you today?</Text>
                    <View style={styles.chatInputPlaceholder}>
                        <Text style={{color: '#666'}}>Ask AI about your notes...</Text>
                    </View>
                </View>
            )}

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab} onPress={() => setIsChatVisible(true)}>
                <Text style={styles.fabIcon}>✨</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#191970' },
    nav: { padding: 20, backgroundColor: 'rgba(0,0,0,0.4)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    title: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
    recordBtn: { color: '#4da6ff', fontWeight: 'bold' },
    content: { padding: 20 },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    subtitle: { color: '#fff', fontSize: 18 },
    summaryBtn: { backgroundColor: '#ff9800', padding: 8, borderRadius: 5 },
    card: { backgroundColor: '#252545', padding: 20, borderRadius: 12, borderLeftWidth: 5, borderLeftColor: '#4da6ff' },
    cardTitle: { color: '#4da6ff', fontWeight: 'bold', marginBottom: 5 },
    cardText: { color: '#ccc', marginBottom: 20 },
    cardActions: { flexDirection: 'row', gap: 15 },
    attachBtn: { borderWidth: 1, borderColor: '#4da6ff', padding: 8, borderRadius: 5 },
    exportBtn: { backgroundColor: '#4caf50', padding: 8, borderRadius: 5 },
    fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#4da6ff', width: 65, height: 65, borderRadius: 32.5, justifyContent: 'center', alignItems: 'center', elevation: 8 },
    fabIcon: { fontSize: 28 },
    chatOverlay: { position: 'absolute', top: 0, right: 0, bottom: 0, width: '85%', backgroundColor: '#1a1a2e', padding: 25, zIndex: 1000, borderLeftWidth: 2, borderLeftColor: '#4da6ff' },
    chatHeader: { flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 15 },
    chatTitle: { color: '#4da6ff', fontSize: 18, fontWeight: 'bold' },
    chatBody: { color: '#fff', marginTop: 20, fontSize: 16 },
    chatInputPlaceholder: { position: 'absolute', bottom: 30, left: 25, right: 25, backgroundColor: '#333', padding: 15, borderRadius: 8 }
});
