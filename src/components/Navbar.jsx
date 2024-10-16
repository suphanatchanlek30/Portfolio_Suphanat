import React, { useState } from 'react';
import { GoMoon } from "react-icons/go";
import { FiMenu } from "react-icons/fi"; // ไอคอนสำหรับเปิดเมนู
import { AiOutlineClose } from "react-icons/ai"; // ไอคอนสำหรับปิดเมนู
import { IoSunnyOutline } from "react-icons/io5";

const navLists = [
    { name: "Home", section: 'homeRef' },
    { name: "About", section: 'aboutRef' },
    { name: "Work", section: 'workRef' },
    { name: "Education & Skill", section: 'educationRef' },
    { name: "Contact", section: 'contactRef' },
];

const Navbar = ({ homeRef, aboutRef, workRef, educationRef, contactRef }) => {
    // สร้าง object refs เพื่อเชื่อมโยงกับแต่ละเมนู
    const sections = {
        homeRef,
        aboutRef,
        workRef,
        educationRef,
        contactRef,
    };

    // สร้างสถานะสำหรับเปิด/ปิดเมนูแบบแท็บ
    const [menuOpen, setMenuOpen] = useState(false);

    // สร้างสถานะสำหรับ darkmode
    const [darkMode, setDarkMode] = useState(false);


    // ฟังก์ชันสำหรับจัดการการเปิด/ปิดเมนู
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // ฟังก์ชันสำหรับจัดการ dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };



    // ฟังก์ชันเลื่อนเพื่อไปยัง section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        toggleMenu(); // ปิดเมนูเมื่อกดที่เมนู
    };

    return (
        <header className='bg-white py-4 md:mt-4 font-body lg:p-4 md:p-9 p-4 mt-2 sticky top-0 z-50'>
            <nav className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <h2 className='text-[26px] font-semibold text-center'>Suphanat.</h2>
                
                {/* List เมนูสำหรับหน้าจอขนาดใหญ่ */}
                <ul className='text-[16px] text-center sm:flex hidden items-center gap-14'>
                    {navLists.map((list, index) => (
                        <li key={index} onClick={() => scrollToSection(sections[list.section])}>
                            <button className='hover:text-[#5d56a7] duration-100'>{list.name}</button>
                        </li>
                    ))}
                </ul>

                {/* Button และไอคอนสำหรับหน้าจอใหญ่ */}
                <div className='items-center hidden md:flex'>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <GoMoon className='mr-8 text-[28px]'/> : <IoSunnyOutline className='mr-8 text-[28px]'/>}
                    </button>
                    <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border rounded-md'>
                        <a href="https://github.com/suphanatchanlek30" target="_blank" rel="noopener noreferrer">Git-Hub</a>
                    </button>
                </div>

                {/* Menu icon (สำหรับหน้าจอเล็ก) */}
                <div className='flex items-center sm:hidden'>
                    <GoMoon className='mr-6 text-[28px]' /> {/* แสดงไอคอนพระจันทร์เสมอ */}
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <AiOutlineClose className="text-[28px]" />
                        ) : (
                            <FiMenu className="text-[28px]" />
                        )}
                    </button>
                </div>
            </nav>

            {/* เมนูแบบแท็บ (สำหรับหน้าจอเล็ก) */}
            <div
                className={`fixed top-[50px] left-0 mt-4 w-full h-[330px] bg-[#F7F7F7] z-20 flex flex-col pt-6 justify-start transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out sm:hidden overflow-y-auto`}
            >
                {/* เมนูเนื้อหา */}
                <ul className="space-y-6 text-center">
                    {navLists.map((list, index) => (
                        <li
                            key={index}
                            onClick={() => scrollToSection(sections[list.section])}
                            className="list-none text-[18px] py-[4px] hover:text-[#5d56a7] duration-200 cursor-pointer"
                        >
                            <button>
                                {list.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
