import React from 'react'

import Home from './pages/Home'
import Header from './components/layout/Header'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Portifolio from './pages/Portifolio'
import Feedback from './pages/Feedback'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Services />
      <Solutions />
      <Portifolio />
      <Feedback />
      <Pricing />
      <Contact />
    </>
  )
}

export default App
