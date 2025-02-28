import React, { useState } from 'react'

import './App.css'
import Navbar from './comp/components/navbar'
import Hero from './comp/components/hero'
import Features from './comp/pages/features'
import Footer from './comp/components/footer'
import Scroll from './comp/pages/scroll'


function App() {

  return (

    <div>
      <Navbar/>
      <Hero/>
      <Scroll/>
      
      <Features/>
      <Footer/>

    </div>
  )
}

export default App

