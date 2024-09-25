import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NoteTaker() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', note: '' });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // ... other functions for adding, updating, deleting, and searching notes

  return (
    <div>
      {/* ... JSX for input fields, buttons, and displaying notes */}
    </div>
  );
}

export default NoteTaker;
