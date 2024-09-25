import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SongList from './CreateSong/SongLsit'; 
import SongForm from './CreateSong/SongForm';

const App = () => {
  return (
    <Provider store={store}>
      <SongList />
      <SongForm/>
    </Provider>
  );
};

export default App;