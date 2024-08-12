import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
