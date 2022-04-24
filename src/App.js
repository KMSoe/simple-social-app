import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import PostList from './features/posts/PostList';
import {Route, Routes} from "react-router-dom"
import PostDetails from './features/posts/PostDetails';
import PageNotFound from './features/posts/PageNotFound';

function App() {
  return (
    <Router>
      <h1>Blog App</h1>
      <Routes>
        <Route exact path="/posts" element={<PostList />} />
        <Route exact path="/posts/:id" element={<PostDetails/>} />
        <Route exact path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;

