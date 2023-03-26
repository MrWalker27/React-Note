const Sidebar = ({notes,onAddNote,onDeleteNote,activeNote, setActiveNote}) => {
    return (<div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Your Notes</h1>
            <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
            {notes.map((note) => (
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <div style={{ fontWeight: 'bold' }}>{note.title != "" ? note.title : 'Note Title'}</div>
                        <button onClick={(e) => onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                </div>
            ))}
        </div>
    </div>);
}

export default Sidebar;