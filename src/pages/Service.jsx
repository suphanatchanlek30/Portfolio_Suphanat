import React from "react";
import { MdOutlineRemove } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { BsDatabase } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const Service = () => {
  return (
    <div className="bg-[#f7f7f7] font-body md:p-0 p-4">

      {/* ข้อความ */}
      <div className="container mx-auto md:pt-[150px] pt-[100px]">
        <div className="flex items-center justify-center">
          <MdOutlineRemove className="text-[#656D72] mr-4 text-[30px] items-center" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center">
            SERVICES
          </p>
        </div>
        <h1 className="md:text-center md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[40px] mt-8">
          Specialized in
        </h1>
      </div>

      {/* กล่อง */}
      <div className="container mx-auto flex md:flex-row flex-col gap-8 justify-around md:pt-[200px] md:pb-[200px] pt-[50px] pb-[100px] items-center">

        {/* กล่อง 1 */}
        <div className="bg-[#FFFFFF] w-[361px] h-[294px] rounded-xl shadow-md">
            <div className="flex flex-col items-center pt-12">
                <div className="w-[56px] h-[56px] rounded-2xl p-4 bg-[#F5F3FE] flex items-center justify-center">
                    <RiVipCrownLine className="text-[#7E74F1] text-[30px] items-center" />
                </div>
                <h2 className="text-center pt-6  text-[18px] font-medium">UI/UX Design</h2>
                <p className="text-center pt-4 text-[16px] font-normal p-10 leading-6">Craft intuitive and visually appealing UX/UI designs that enhance user experience and interface.</p>
            </div>
        </div>

        
         {/* กล่อง 2 */}
        <div className="bg-[#FFFFFF] w-[361px] h-[294px] rounded-xl shadow-md">
            <div className="flex flex-col items-center pt-12">
                <div className="w-[56px] h-[56px] rounded-2xl p-4 bg-[#F5F3FE] flex items-center justify-center">
                    <BsDatabase className="text-[#7E74F1] text-[30px] items-center"/>
                </div>
                <h2 className="text-center pt-6  text-[18px] font-medium">Database Management</h2>
                <p className="text-center pt-4 text-[16px] font-normal p-10 leading-6">I have a strong understanding of database design and am proficient in creating efficient and well-structured databases.</p>
            </div>
        </div>

        
        {/* กล่อง 3 */}
        <div className="bg-[#FFFFFF] w-[361px] h-[294px] rounded-xl shadow-md">
            <div className="flex flex-col items-center pt-12">
                <div className="w-[56px] h-[56px] rounded-2xl p-4 bg-[#F5F3FE] flex items-center justify-center">
                    <TfiWorld className="text-[#7E74F1] text-[30px] items-center"/>
                </div>
                <h2 className="text-center pt-6  text-[18px] font-medium">Web Development</h2>
                <p className="text-center pt-4 text-[16px] font-normal p-10 leading-6">I create and maintain websites, ensuring their performance and ability to handle traffic efficiently.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
