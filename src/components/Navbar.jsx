import React from 'react'
import { GoMoon } from "react-icons/go";

const navLists = [
    {name: "Home"},
    {name: "About"},
    {name: "Work"},
    {name: "Education & Skill"},
    {name: "Contact"},
]

const Navbar = () => {
  return (
    <header className='bg-white py-4 mt-4 font-body'>
        <nav className='container mx-auto flex text-[#232E35] justify-between text-center items-center'>
            {/* Logo */}
            <a href="" className='text-[26px] font-semibold text-center'>
                <h2>Suphanat.</h2>
            </a>
            
            {/* List */}
            <ul className='text-[16px] text-center sm:flex hidden items-center gap-14 '>
                {
                    navLists.map((list, index) => (
                        <li key={index}>{list.name}</li>
                    ))
                }
            </ul>

            {/* Button and icon */}
            <div className='flex items-center '>
                
                <a href="">
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