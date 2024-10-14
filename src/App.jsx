import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Work from './pages/Work';

function App() {
   // สร้าง refs สำหรับแต่ละ section
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const workRef = useRef(null);
 
   // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่ต้องการ
   const scrollToSection = (section) => {
     section.current.scrollIntoView({ behavior: 'smooth' });
   };

  return (
    <>
      <div>
        <Navbar 
          scrollToSection={scrollToSection} 
          homeRef={homeRef} 
          aboutRef={aboutRef}
          workRef={workRef}
        />
        <div ref={homeRef}>
          <Home />
        </div>
        <Service/>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={workRef}>
          <Work/>
        </div>
      </div>
    </>
  )
}

export default App;
