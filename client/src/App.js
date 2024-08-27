import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'; 
import { CTA, Brand, Navbar } from './components'; 
import { Ship } from './pages/ship/Ship'
import { Track } from './pages/track/Track'
import { Schedule } from './pages/schedule/Schedule'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Home } from './pages/home/Home'
import './App.css'
import React, { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (

      <div className = "App">
            
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/ship" element={<Ship />} />
          <Route path="/track" element={<Track />} /> 
          <Route path="/schedule" element={<Schedule />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

      </div>


  )
}

export default App