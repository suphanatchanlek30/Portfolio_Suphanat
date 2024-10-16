import React from 'react';
import { MdOutlineRemove } from 'react-icons/md';

const About = () => {
  return (
    <div className='container mx-auto flex flex-col font-body p-5'>
      {/* Title Section */}
      <div className="md:pt-[150px] pt-[100px] text-center">
        <div className="flex items-center justify-center">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 md:text-[30px] text-[28px]" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px]">
            MY SELF
          </p>
        </div>
        <h1 className="md:text-[36px] font-bold text-[#232E35] md:mt-8 text-[35px] mt-6">
          About me
        </h1>
      </div>

      {/* Content Section */}
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-[20px] mb-[100px]'>
        {/* Left Section */}
        <div className='md:w-1/2 w-full p-4 flex justify-center'>
          <div className='flex justify-center md:w-[370px] md:h-[370px] w-full h-[350px]'>
            <img src="/src/assets/img/img2.png" alt="Profile" className='rounded-lg shadow-md' />
          </div>
        </div>

        {/* Right Section */}
        <div className='md:w-1/2 w-full p-4 flex flex-col'>
          <h2 className='text-[24px] font-semibold text-[#232E35] text-center md:text-start'>
            Suphanat <span className='text-[#7E74F1]'>Chanlek</span>
          </h2>
          <p className='text-[18px] font-normal text-[#656D72] text-center md:text-start'>
            Frontend Developer
          </p>
          <p className='text-[16px] font-medium text-[#656D72] text-center md:text-start md:pt-4 pt-2'>
            I am currently studying for a degree in Computer Science at Thammasat University.
          </p>
          <hr className='h-[1px] my-8 md:mx-0 mx-4 border-0 bg-[#D2D2D2]' />

          {/* Skills Section */}
          {[
            "Experienced in UX/UI web design for a seamless user experience.",
            "I can translate design concepts into efficient, working web applications.",
            "I am eager to expand my knowledge in frontend development.",
            "I want practical experience in frontend development to enhance my skills."
          ].map((skill, index) => (
            <div key={index} className="flex items-center pt-4">
              <MdOutlineRemove className="text-[#D9D9D9] mr-4 text-[20px]" />
              <p className="md:text-[18px] text-[15px] font-normal text-[#656D72]">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
