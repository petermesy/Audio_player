import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsStart, deleteSong } from './songReducer'; // Import fetchSongsStart
import SongModel from './SongModel';
const SongList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart()); // Dispatch action to fetch songs
  }, [dispatch]); // Add dispatch as a dependency to avoid infinite loop

  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => dispatch(deleteSong(song.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <SongModel />
    </div>
  );
};

export default SongList;