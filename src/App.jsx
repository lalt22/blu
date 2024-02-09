import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAllBlogPosts, makeBlogPost } from '../services/blog-post-services';
import RefreshContextProvider from './context/RefreshContext';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import PostsPage from './pages/PostsPage/PostsPage';
import CreatePage from './pages/CreatePage/CreatePage';
import ContentPage from './pages/ContentPage/ContentPage';

function App() {

  return (
    <RefreshContextProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/see-posts' element={<PostsPage />}/>
          <Route path="/make-post" element={<CreatePage />}/>
          <Route path='/posts/:id' element={<ContentPage />} />
        </Routes>
      </BrowserRouter>
    </RefreshContextProvider>
  )
}

export default App
