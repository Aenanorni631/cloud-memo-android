export default function NotebookDashboard() {
    return (
        <div className="notebook-dashboard">
            <header className="dashboard-header">
                <h2>My Notebooks</h2>
                <button className="new-notebook-btn">+ New Topic</button>
            </header>
            
            <div className="tabs-container">
                <button className="tab active">Daily Thoughts</button>
                <button className="tab">Meeting Notes</button>
                <button className="tab">Project Ideas</button>
            </div>

            <div className="category-view">
                {/* Dynamically mapped notes will go here */}
                <p>Select a tab to view your categorized notes.</p>
            </div>
        </div>
    );
}
