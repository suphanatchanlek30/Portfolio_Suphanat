import React from 'react'
import { MdOutlineRemove } from 'react-icons/md'

const About = () => {
  return (
    <div className='container mx-auto flex flex-col font-body'>
      {/* ข้อความ */}
      <div className="container mx-auto md:pt-[150px] pt-[100px]">
        <div className="flex items-center justify-center">
          <MdOutlineRemove className="text-[#656D72] mr-4 md:text-[30px] text-[28px] items-center" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center">
            MY SELF
          </p>
        </div>
        <h1 className="md:text-center md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[40px] mt-6">
          About me
        </h1>
      </div>

      {/* content */}
      <div className='container mx-auto flex flex-col font-body md:flex-row justify-between md:gap-8 gap-2 md:mt-[100px] md:mb-[200px] mt-[20px]'>
        {/* left */}
        <div className='md:w-1/2 w-full md:pl-0 p-4'>
            <div className='flex md:justify-center md:w-[370px] md:h-[370px] mx-auto w-full h-[350px] justify-center'>
              <img src="/src/assets/img/img2.png" alt="" className='rounded-lg shadow-md'/>
            </div>
        </div>

        {/* Right */}
        <div className='md:w-1/2 w-full md:p-0 p-4'>
          <h2 className='md:text-[24px] md:text-start text-center text-[24px] font-semibold text-[#232E35]'>Suphanat <span className='text-[#7E74F1]'>Chanlek</span></h2>
          <p className='md:text-[18px] md:text-start text-center text-[18px] md:pt-4 pt-2 font-normal text-[#656D72]'>Frontend Deverloper</p>
          <p className='md:text-[18px] md:text-start text-center text-[16px] md:pt-4 pt-2 md:pr-0 md:pl-0 pr-4 pl-4 md:pb-3 pb-2 font-medium text-[#656D72]'>I am currently studying for a degree in Computer Science at Thammasat University.</p>
          <hr className='h-[1px] my-8 md:mx-0 mx-4 border-0 bg-[#D2D2D2]' />
          
          {/* - */}
          <div className="flex items-center md:pt-3 pt-2 md:pr-0 md:pl-0 pr-4 pl-4">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 text-[20px]" />
          <p className="md:text-[18px] text-[15px] font-normal text-[#656D72]">
            Experienced in UX/UI web design for a seamless user experience.
          </p>
          </div>

          {/* - */}
          <div className="flex items-center pt-4 md:pr-0 md:pl-0 pr-4 pl-4">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 text-[20px]" />
          <p className="md:text-[18px] text-[15px] font-normal text-[#656D72]">
            I can translate design concepts into efficient, working web applications.
          </p>
          </div>

          {/* - */}
          <div className="flex items-center pt-4 md:pr-0 md:pl-0 pr-4 pl-4">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 text-[20px]" />
          <p className="md:text-[18px] text-[15px] font-normal text-[#656D72]">
            I am eager to expand my knowledge in frontend development.
          </p>
          </div>

          {/* - */}
          <div className="flex items-center pt-4 md:pr-0 md:pl-0 pr-4 pl-4">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 text-[20px]" />
          <p className="md:text-[18px] text-[15px] font-normal text-[#656D72]">
            I want practical experience in frontend development to enhance my skills.
          </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About