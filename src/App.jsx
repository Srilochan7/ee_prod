import React, { useState } from 'react'

import './App.css'
import Navbar from './comp/components/navbar'
import Hero from './comp/components/hero'
import What from './comp/pages/what'
import Footer from './comp/components/footer'
import Scroll from './comp/pages/scroll'
import Mission from './comp/pages/mission'
import Resources from './comp/pages/resources'
import About from './comp/pages/about'
import { Routes, Route } from "react-router-dom";
import Home from './comp/pages/home'

function App() {

  return (

    <div>
      <Navbar/>
      <Hero/>
      <Scroll/>
      
      <What/>
      <Mission/>
      <About/>
      <Resources/>
      <Footer/>
      <Routes>
      <Route path="/home" element={<Home/>} />
    </Routes>

    </div>
  )
}

export default App




