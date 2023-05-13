import './App.css';
// import About from './pages/About'
// import Navbar  from './pages/Navbar'
import Project from './pages/Project'
import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="project" element={<Project/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} /> 
      </Routes>
      </>
  );
}

export default App;
