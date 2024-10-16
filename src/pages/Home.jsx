import React from 'react'
import { MdOutlineRemove } from "react-icons/md";

const Home = () => {
  return (
    <div className='container p-5 mx-auto flex flex-col font-body md:flex-row justify-between items-center md:gap-4 gap-4 md:mt-[100px] md:mb-[200px] mt-[50px]'>
        {/* left */}
        <div className='md:w-1/2 w-full md:p-0 p-4'>

            <div className='flex items-center'>
                <MdOutlineRemove className='text-[#D9D9D9] mr-4 text-[30px] items-center' /> 
                <p className='md:text-[14px] text-[16px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] dark:text-[#FFFFFF]'>
                    MY NAME IS
                </p>
            </div>
            
            <h1 className='md:text-[44px] md:text-start font-bold text-[#232E35] md:mt-8 text-center text-[40px] mt-10 dark:text-[#FFFFFF]'>Suphanat <span className='text-[#7E74F1]'>Chanlek.</span></h1>

            <p className='md:text-[16px] md:text-start text-[#232E35] font-normal mt-8 text-center dark:text-[#FFFFFF]'>
                Creative front-end developer. Proficient in JavaScript, Next.js and React.js and <br /> are interested in making web applications.
            </p>

            {/* Button */}
            <div className='flex items-center md:items-start md:mt-[85px] md:justify-start justify-center mt-[50px]'>
                <button className='text-[16px] text-center font-medium pt-4 pb-4 pr-6 pl-6 border-2 rounded-md dark:text-[#FFFFFF]'>
                    <a href="https://github.com/suphanatchanlek30">Resume</a>
                </button>
            </div>
        </div>

        {/* Right */}
        <div className='md:w-1/2 w-full'>
            <div className='flex md:justify-end md:w-full md:h-[450px] lg:w-full lg:h-[500px] mx-auto w-full h-[300px] justify-center'>
                <img src="/src/assets/img/img1.png" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Home