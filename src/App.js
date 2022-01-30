import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <div>
        <Header name="Meg" />
        <Nav />
        <MainContent />
        <Footer />
    </div>
  )
}

export default App