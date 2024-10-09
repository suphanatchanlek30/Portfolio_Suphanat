import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';

function App() {
   // สร้าง refs สำหรับแต่ละ section
   const homeRef = useRef(null);
 
   // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่ต้องการ
   const scrollToSection = (section) => {
     section.current.scrollIntoView({ behavior: 'smooth' });
   };

  return (
    <>
      <div>
        <Navbar scrollToSection={scrollToSection} homeRef={homeRef}/>
        <div ref={homeRef}>
          <Home />
        </div>
        <Service/>
        
      </div>
    </>
  )
}

export default App;
