import React from 'react'
import Analytics from './components/Analytics'
import Hero from './components/Hero'
import Cards from './components/Cards'
import NavBar from './components/NavBar'
import NewsLatter from './components/NewsLatter'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <NewsLatter/>
      <Cards/>
    </div>
  )
}

export default App