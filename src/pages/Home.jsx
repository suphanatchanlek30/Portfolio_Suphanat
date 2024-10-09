import React from 'react'
import { MdOutlineRemove } from "react-icons/md";

const Home = () => {
  return (
    <div className='container mx-auto flex flex-col font-body md:flex-row justify-between items-center md:gap-4 gap-8 mt-[150px]'>
        {/* left */}
        <div className='md:w-1/2 w-full'>
            <div className='flex items-center'>
                <MdOutlineRemove className='text-[#D9D9D9] mr-4 text-[30px] items-center' /> 
                <p className='text-[14px] font-medium text-[#656D72] tracking-[7.5px]'>
                    MY NAME IS
                </p>
            </div>
            
            <h1 className='text-[44px] font-bold text-[#232E35] mt-8'>Suphanat Chanlek.</h1>

            <p className='text-[16px] text-[#232E35] font-normal mt-8'>
                Creative front-end developer. Proficient in JavaScript, Next.js and React.js and <br /> are interested in making web applications.
            </p>

            {/* Button */}
            <div className='flex items-center mt-[84px]'>
                <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border-2 rounded-md'>
                    <a href="https://github.com/suphanatchanlek30">Resume</a>
                </button>
            </div>

        </div>

        {/* Right */}
        <div className='md:w-1/2 w-full border-2'>
            
        </div>
        
    </div>
  )
}

export default Home