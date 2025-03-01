import React, { useState } from 'react'

import './App.css'
import Navbar from './comp/components/navbar'
import Hero from './comp/components/hero'
import What from './comp/pages/what'
import Footer from './comp/components/footer'
import Scroll from './comp/pages/scroll'
import Mission from './comp/pages/mission'
import Resources from './comp/pages/resources'


function App() {

  return (

    <div>
      <Navbar/>
      <Hero/>
      <Scroll/>
      
      <What/>
      <Mission/>
      <Resources/>
      <Footer/>

    </div>
  )
}

export default App

