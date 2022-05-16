import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import PostList from './features/posts/PostList';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import PostDetails from './features/posts/PostDetails';
import PageNotFound from './features/posts/PageNotFound';
import AddPost from './features/posts/AddPost';
import Signin from './features/auth/Signin';
import Signup from './features/auth/Signup';
import { autoSignin } from './features/auth/authSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoSignin());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/addpost" element={<AddPost />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;

