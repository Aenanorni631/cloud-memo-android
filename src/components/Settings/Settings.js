export default function Settings({ changeTheme }) {
    return (
        <div className="settings-panel">
            <h2>App Settings</h2>
            
            <div className="setting-group">
                <h3>UI Theme</h3>
                <select onChange={(e) => changeTheme(e.target.value)} defaultValue="midnight-blue">
                    <option value="midnight-blue">Midnight Blue (Default)</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </div>

            <div className="setting-group">
                <h3>Cloud Sync</h3>
                <button className="drive-btn">Link Google Account</button>
            </div>

            <div className="setting-group">
                <h3>AI Assistant Preferences</h3>
                <label><input type="checkbox" defaultChecked /> Auto-categorize notebooks</label>
                <label><input type="checkbox" defaultChecked /> Voice chat mode enabled</label>
            </div>

            <div className="setting-group">
                <h3>Daily Morning Affirmations</h3>
                <label><input type="checkbox" defaultChecked /> Enable daily push notifications</label>
                <label>Delivery Time: <input type="time" defaultValue="08:00" /></label>
            </div>
        </div>
    );
}
