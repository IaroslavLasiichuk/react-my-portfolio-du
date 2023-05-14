import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
  );
}

export default App;
