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
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

