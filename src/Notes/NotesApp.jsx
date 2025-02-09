import React, { useState, useEffect } from 'react';
import './NotesApp.css'; // Import your CSS file

const NotesApp = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );
  const [newNoteText, setNewNoteText] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editText, setEditText] = useState('');


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (e) => {
    setNewNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (newNoteText.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: newNoteText }]);
      setNewNoteText('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if(editNoteId === id) {
        setEditNoteId(null); // Close edit mode if deleting the note being edited.
    }
  };

  const handleEditNote = (note) => {
    setEditNoteId(note.id);
    setEditText(note.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      setNotes(
        notes.map((note) =>
          note.id === editNoteId ? { ...note, text: editText } : note
        )
      );
      setEditNoteId(null);
      setEditText('');
    }
  };

  const handleCancelEdit = () => {
      setEditNoteId(null);
      setEditText('');
  }

  return (
    <div className="notes-app">
      <h1>Notes App</h1>
      <div className="note-input">
        <textarea
          placeholder="Enter your note..."
          value={newNoteText}
          onChange={handleInputChange}
          rows="3" // Adjust rows for initial height
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div className="note-list">
        {notes.map((note) => (
          <div key={note.id} className="note">
            {editNoteId === note.id ? ( // Edit Mode
              <div>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows="3"
                />
                <button onClick={handleSaveEdit} style={{color:'white',backgroundColor:'green'}}>Save</button>
                <button onClick={handleCancelEdit}style={{color:'white',backgroundColor:'#dc3545'}}>Cancel</button>
              </div>
            ) : ( // View Mode
              <div>
                <p>{note.text}</p>
                <div className="note-actions">
                  <button onClick={() => handleEditNote(note)}>Edit</button>
                  <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesApp;