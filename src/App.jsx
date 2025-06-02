import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import Footer from './Pages/Footer'
import HowItWork from './Pages/HowItWork'
import Features from './Pages/Features'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import Contactus from './Pages/Contactus'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HowItWork/>
      <Features/>
      <About/>
      <Pricing/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
