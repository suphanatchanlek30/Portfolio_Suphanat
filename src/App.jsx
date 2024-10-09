import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App;
