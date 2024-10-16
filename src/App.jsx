import React, { useRef, useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false);
  
  // สร้าง refs สำหรับแต่ละ section
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  
  // ฟังก์ชันสำหรับเลื่อนหน้าไปยัง section ที่ต้องการ
  const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ฟังก์ชันสำหรับสลับ dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-[#1E1E1E] transition-colors duration-300">
        <Navbar
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          serviceRef={serviceRef}
          aboutRef={aboutRef}
          workRef={workRef}
          educationRef={educationRef}
          contactRef={contactRef}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div ref={homeRef}>
          <Home darkMode={darkMode} />
        </div>
        <div ref={serviceRef}>
          <Service darkMode={darkMode} />
        </div>
        <div ref={aboutRef}>
          <About darkMode={darkMode} />
        </div>
        <div ref={workRef}>
          <Work darkMode={darkMode} />
        </div>
        <div ref={educationRef}>
          <Education darkMode={darkMode} />
        </div>
        <div ref={contactRef}>
          <Contact darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;