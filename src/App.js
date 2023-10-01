import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Home from './components/Home/Home'
import Features from './components/Features/Features'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

export default function App() {
  return(
    <>
    <Header />
    <Home/>
    <Features />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />
    </>
    ) 
}
