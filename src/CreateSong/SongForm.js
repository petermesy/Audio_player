import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, updateSong } from './songReducer';

const SongForm = ({ songToEdit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(songToEdit ? songToEdit.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (songToEdit) {
      dispatch(updateSong({ id: songToEdit.id, title }));
    } else {
      dispatch(addSong({ title }));
      }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">{songToEdit ? 'Update' : 'Add'}</button>
   <h1>Form</h1>
    </form>
  );
};

export default SongForm;