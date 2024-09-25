import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchSongsStart = createAsyncThunk(
  'songs/fetchSongs',
  async () => {
    const response = await fetch('/api/songs'); // Replace with your API endpoint
    return response.json();
  }
);

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    updateSong: (state, action) => {
      const updatedSong = action.payload;
      const index = state.findIndex((song) => song.id === updatedSong.id);
      if (index !== -1) {
        state[index] = updatedSong;
      }
    },
    deleteSong: (state, action) => {
      const songId = action.payload;
      return state.filter((song) => song.id !== songId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongsStart.pending, (state) => {
        // Add logic for pending state (optional, e.g., set loading flag)
      })
      .addCase(fetchSongsStart.fulfilled, (state, action) => {
        state.push(...action.payload); // Update state with fetched songs
      })
      .addCase(fetchSongsStart.rejected, (state, action) => {
        // Add logic for error handling (optional)
      });
  },
});

export const { addSong, updateSong, deleteSong } = songSlice.actions;
export default songSlice.reducer;