import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState(null);
  
    const handleDeleteConfirmation = (noteId) => {
      setNoteToDelete(noteId);
      setShowDeleteConfirmation(true);
    };
  
    const handleDeleteNote = () => {
      onDeleteNote(noteToDelete);
      setShowDeleteConfirmation(false);
      setNoteToDelete(null);
    };
    const style1 = { color: 'crimson' }
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1 className="title1">Your Notes</h1>
          <h1 className="title2">Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`app-sidebar-note ${
                note.id === activeNote && 'active'
              }`}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sidebar-note-title">
                <div style={{ fontWeight: 'bold' }}>
                  {note.title !== '' ? note.title : 'Note Title'}
                </div>
                {note.id === activeNote && (
                  <div>
                    <button
                      id="delete_button"
                      onClick={() => handleDeleteConfirmation(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <p id="sidebar_body">
                {note.body && note.body.substr(0, 100) + ' ...'}
              </p>
            </div>
          ))}
        </div>
        {showDeleteConfirmation && (
          <div className="delete-confirmation-overlay">
            <div className="delete-confirmation-popup">
              <p>Are you sure you want to delete this note?</p>
              <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
                        <button onClick={handleDeleteNote} style={{...style1}}>Yes</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Sidebar;
  
