import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import SinglePost from './pages/SinglePost';
import Footer from './components/Footer';

const App = () =>{
  return(
  <>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/singlepost" element={<SinglePost/>}/>
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer/>
        
  </>
  )
}

export default App;
