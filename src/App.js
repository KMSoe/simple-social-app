import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import PostList from './features/posts/PostList';
import {Route, Routes , BrowserRouter as Router} from "react-router-dom"
import PostDetails from './features/posts/PostDetails';

function App() {
  return (
    <Router>
      <h1>Blog App</h1>
      <Routes>
        <Route exact path="/posts" element={<PostList />} />
        <Route exact path="/posts/:id" element={<PostDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;

