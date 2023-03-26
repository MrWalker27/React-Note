import './App.css';
import uuid from 'react-uuid';
import Sidebar from './components/Sidebar';
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  const onDeleteNote = (deletionId) => {
    setNotes(notes.filter(({ id }) => id != deletionId));
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  };
  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />

    </div>
  );
}

export default App;
