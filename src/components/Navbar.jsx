import React, { useState } from 'react';
import { GoMoon } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";

const navLists = [
    { name: "Home", section: 'homeRef' },
    { name: "About", section: 'aboutRef' },
    { name: "Work", section: 'workRef' },
    { name: "Education & Skill", section: 'educationRef' },
    { name: "Contact", section: 'contactRef' },
];

const Navbar = ({ scrollToSection, homeRef, aboutRef, workRef, educationRef, contactRef, darkMode, toggleDarkMode }) => {
    const sections = {
        homeRef,
        aboutRef,
        workRef,
        educationRef,
        contactRef,
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='bg-white dark:bg-[#1E1E1E] py-4 md:mt-0 mt-0 font-body lg:p-4 md:p-9 p-4 sticky top-0 z-50 transition-colors duration-300'>
            <nav className='container mx-auto flex justify-between items-center'>
                <h2 className='text-[26px] font-semibold text-center dark:text-white'>Suphanat.</h2>
                
                <ul className='text-[16px] text-center sm:flex hidden items-center gap-14'>
                    {navLists.map((list, index) => (
                        <li key={index} onClick={() => scrollToSection(sections[list.section])}>
                            <button className='hover:text-[#5d56a7] dark:text-white dark:hover:text-[#7E74F1] duration-100'>{list.name}</button>
                        </li>
                    ))}
                </ul>

                <div className='items-center hidden md:flex'>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <IoSunnyOutline className='mr-8 text-[28px] text-white'/> : <GoMoon className='mr-8 text-[28px]'/>}
                    </button>
                    <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border rounded-md dark:text-white dark:border-white'>
                        <a href="https://github.com/suphanatchanlek30" target="_blank" rel="noopener noreferrer">Git-Hub</a>
                    </button>
                </div>

                <div className='flex items-center sm:hidden'>
                    <button onClick={toggleDarkMode}>
                        {darkMode ? <IoSunnyOutline className='mr-6 text-[28px] text-white'/> : <GoMoon className='mr-6 text-[28px]'/>}
                    </button>
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <AiOutlineClose className="text-[28px] dark:text-white" />
                        ) : (
                            <FiMenu className="text-[28px] dark:text-white" />
                        )}
                    </button>
                </div>
            </nav>

            {/* เมนูแบบแท็บ (สำหรับหน้าจอเล็ก) */}
            <div
                className={`fixed top-[50px] left-0 mt-4 w-full h-[330px] bg-[#F7F7F7] dark:bg-[#1E1E1E] z-20 flex flex-col pt-6 justify-start transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out sm:hidden overflow-y-auto`}
            >
                <ul className="space-y-6 text-center">
                    {navLists.map((list, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                scrollToSection(sections[list.section]);
                                toggleMenu();
                            }}
                            className="list-none text-[18px] py-[4px] hover:text-[#5d56a7] dark:text-white dark:hover:text-[#7E74F1] duration-200 cursor-pointer"
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