import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App

