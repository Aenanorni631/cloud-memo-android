export default function NoteEditor() {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if(file) alert(`Uploading ${file.name} to this notebook...`);
    };

    return (
        <div className="note-editor">
            <input type="text" className="note-title" placeholder="Note Title..." />
            
            <div className="editor-toolbar">
                <label className="upload-btn">
                    📎 Attach PDF/File
                    <input type="file" hidden onChange={handleFileUpload} accept=".pdf,.doc,.docx,.png,.jpg" />
                </label>
            </div>

            <textarea className="note-body" placeholder="Start typing your note here..."></textarea>
            
            <div className="note-footer">
                <button className="reminder-btn">⏰ Set Follow-up Reminder</button>
            </div>
        </div>
    );
}
