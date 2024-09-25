import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SongForm from './SongForm';

const SongModal = () => {
  const songs = useSelector((state) => state.songs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [songToEdit, setSongToEdit] = useState(null);

  const handleOpenModal = (song) => {
    setSongToEdit(song);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSongToEdit(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => handleOpenModal()}>Add Song</button>
      {songs.map((song) => (
        <button key={song.id} onClick={() => handleOpenModal(song)}>
          Edit
        </button>
      ))}
      {isModalOpen && (
        <div>
          <SongForm songToEdit={songToEdit} />
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SongModal;