import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css';

import Main from './pages/Main';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import MobileMenu from './components/MobileMenu';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Shop from './pages/Shop';

import './App.css';
// import './Demo.css';
import './Diff.scss';
import Header from './components/Header';




function App() {
  const loc = useLocation();
  const [location, setLocation] = useState(loc.pathname);
  localStorage.setItem('search', '');
  useEffect(() => {
    if (location !== loc.pathname) {
      // window.location.reload();
    }
  },[loc]);
  
  return (
    <>
    <div className={loc.pathname === '/'? "main home":"home"}>
      <div className="page-wrapper">
          {loc.pathname === '/'? 
            <MainHeader /> :
            <Header active={loc.pathname}/>
          }
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/shop-stroi-material" element={<Shop/>} />
          <Route path="/shop-stroi-material/:slug" element={<Shop/>} />
          <Route path="/shop-stroi-material/*/:slug" element={<Shop/>} />
          <Route path="/contact-us" element={<Contacts/>} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
        <Footer />
      </div>
      <ScrollButton />
    </div>
    <MobileMenu/>
    </>
  );
}

export default App;
