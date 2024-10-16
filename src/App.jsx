import { useRef } from 'react';
import './App.css';
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
   const serviceRef = useRef(null); // เพิ่ม ref สำหรับ Service
   const aboutRef = useRef(null);
   const workRef = useRef(null);
   const educationRef = useRef(null);
   const contactRef = useRef(null);
 
   // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่ต้องการ
   const scrollToSection = (section) => {
     if (section.current) { // ตรวจสอบว่า section.current มีค่าอยู่
       section.current.scrollIntoView({ behavior: 'smooth' });
     }
   };

  return (
    <>
      <div>
        <Navbar 
          scrollToSection={scrollToSection} 
          homeRef={homeRef} 
          serviceRef={serviceRef} // ส่ง ref สำหรับ Service
          aboutRef={aboutRef}
          workRef={workRef}
          educationRef={educationRef}
          contactRef={contactRef}
        />
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={serviceRef}>
          <Service/> {/* ใช้ ref สำหรับ Service */}
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={workRef}>
          <Work />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
