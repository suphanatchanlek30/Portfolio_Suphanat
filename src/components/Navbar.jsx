import React from 'react'
import { GoMoon } from "react-icons/go";

const navLists = [
    { name: "Home", section: 'homeRef' },
    { name: "About", section: 'aboutRef' },
    { name: "Work", section: 'workRef' },
    { name: "Education & Skill", section: 'educationRef' },
    { name: "Contact", section: 'contactRef' },
]

const Navbar = ({ scrollToSection, homeRef, aboutRef, workRef, educationRef, contactRef }) => {
    // สร้าง object refs เพื่อเชื่อมโยงกับแต่ละเมนู
    const sections = {
        homeRef: homeRef,
        aboutRef: aboutRef,
        workRef: workRef,
        educationRef: educationRef,
        contactRef: contactRef,
      };
    
  return (
    <header className='bg-white py-4 md:mt-4 font-body lg:p-4 md:p-0 p-4 mt-2'>
        <nav className='container mx-auto flex text-[#232E35] justify-between text-center items-center'>
            {/* Logo */}
            <a href="#" className='text-[26px] font-semibold text-center'>
                <h2>Suphanat.</h2>
            </a>
            
            {/* List */}
            <ul className='text-[16px] text-center sm:flex hidden items-center gap-14 '>
                {
                    navLists.map((list, index) => (
                        <li key={index} onClick={() => scrollToSection(sections[list.section])}>
                            <a href="#" className='hover:text-[#5d56a7] duration-100'>{list.name}</a>
                        </li>
                    ))
                }
            </ul>

            {/* Button and icon */}
            <div className='flex items-center '>
                
                <a href="#">
                <GoMoon className='mr-8 text-[28px]' />
                </a>

                <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border rounded-md'>
                    <a href="https://github.com/suphanatchanlek30">Git-Hub</a>
                </button>

            </div>

        </nav>
    </header>
  )
}

export default Navbar