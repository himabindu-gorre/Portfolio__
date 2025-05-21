import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <Education />
      <Experience />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


