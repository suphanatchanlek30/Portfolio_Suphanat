import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Work from './pages/Work';
import Education from './pages/Education';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
   // สร้าง refs สำหรับแต่ละ section
   const homeRef = useRef(null);
   const aboutRef = useRef(null);
   const workRef = useRef(null);
   const educationRef = useRef(null);
   const contactRef = useRef(null);
 
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
          educationRef={educationRef}
          contactRef={contactRef}
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
        <div ref={educationRef}>
          <Education/>
        </div>
        <div ref={contactRef}>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App;
