import React from 'react';
import './App.css';
import { Sidebar, Feed } from './Components.js';
import { PostProvider } from '../Context/PostContext'



function App() {
  return (
    <PostProvider>
      <div className='app'>
        <Sidebar />
        <Feed />
      </div>
    </PostProvider>
  );
}

export default App;
