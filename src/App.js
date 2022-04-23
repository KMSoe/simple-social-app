import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import PostList from './features/posts/PostList';

function App() {
  return (
    <Router>
      <h1>Blog App</h1>
      <PostList />
    </Router>
  );
}

export default App;