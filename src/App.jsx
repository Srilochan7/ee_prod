import React, { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import Footer from './components/footer'
import What from './components/what'


function App() {

  return (

    <div>
      <Navbar/>
      <Hero/>
      <What/>
      <Footer/>

    </div>
  )
}

export default App

