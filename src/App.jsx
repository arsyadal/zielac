import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  )
}

export default App
