import React, { useState } from 'react'

import './App.css'
import Navbar from './comp/components/navbar'
import Hero from './comp/components/hero'
import What from './comp/pages/what'
import Footer from './comp/components/footer'
import Scroll from './comp/pages/scroll'


function App() {

  return (

    <div>
      <Navbar/>
      <Hero/>
      <Scroll/>
      
      <What/>
      <Footer/>

    </div>
  )
}

export default App

