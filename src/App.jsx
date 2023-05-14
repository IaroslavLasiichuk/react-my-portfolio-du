import Project from './pages/Project'
import Layout from './pages/Layout'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Layout/>}/>
        <Route exact path="project" element={<Project/>} />
        <Route exact path="blog" element={<Blog/>} />
        <Route exact path="contact" element={<Contact/>} /> 
      </Routes>
      </>
  );
}

export default App;
