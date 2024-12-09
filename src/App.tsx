import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Hobby from './components/hobby';
import Contact from './components/contact';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/experience-page" element={<Experience />} />
          <Route path="/hobby-page" element={<Hobby />} />
          <Route path="/contact-page" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;