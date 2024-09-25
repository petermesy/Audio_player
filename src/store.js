import { createStore } from 'redux';

const initialState = {
  songs: [],
  editingSong: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_SUCCESS':
      return { ...state, songs: action.payload };
    case 'CREATE_SONG_SUCCESS':
      return { ...state, songs: [...state.songs, action.payload] };
    case 'UPDATE_SONG_SUCCESS':
      return {
        ...state,
        songs: state.songs.map((song) =>
          song.id === action.payload.id ? action.payload : song
        ),
      };
    case 'DELETE_SONG_SUCCESS':
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };
    case 'EDIT_SONG':
      return { ...state, editingSong: action.payload };
    case 'CANCEL_EDIT':
      return { ...state, editingSong: null };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;