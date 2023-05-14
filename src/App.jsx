import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
