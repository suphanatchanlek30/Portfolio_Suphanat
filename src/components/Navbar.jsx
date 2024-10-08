import React from 'react'

const navLists = [
    {name: "Home"},
    {name: "About"},
    {name: "Work"},
    {name: "Education & Skill"},
    {name: "Contact"},
]

const Navbar = () => {
  return (
    <header className='bg-white py-4 mt-4'>
        <nav className='container mx-auto flex text-[#232E35] justify-between text-center'>
            {/* Logo */}
            <a href="" className='text-[26px] font-semibold'>
                <h2>Suphanat.</h2>
            </a>
            
            {/* List */}
            <ul className='text-[16px] text-center sm:flex hidden items-center gap-14 '>
                {
                    navLists.map((list, index) => (
                        <li>{list.name}</li>
                    ))
                }
            </ul>

            {/* Button */}
            <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border rounded-md'>
                <a href="">Git-Hub</a>
            </button>
        </nav>
    </header>
  )
}

export default Navbar