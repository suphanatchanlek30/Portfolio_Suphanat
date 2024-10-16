import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineRemove } from "react-icons/md";
import { CiMapPin } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-[#f7f7f7] font-body md:p-9 p-4 md:pb-[150px] pb-[50px] dark:bg-[#151414]">
      <div className="container mx-auto flex flex-col font-body p-5">
        {/* ข้อความ */}
        <div className="md:pt-[75px] pt-[50px] md:pb-16">
          <div className="flex items-center justify-start">
            <MdOutlineRemove className="text-[#D9D9D9] mr-4 md:text-[30px] text-[28px] items-center" />
            <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center dark:text-[#FFFFFF]">
              CONTACT PAGE
            </p>
          </div>

          <h1 className="md:text-start md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[35px] mt-6 dark:text-[#FFFFFF]">
            Contact
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-0 md:mt-0 mt-6">
          {/* Left (Form) */}
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[48px] px-4 py-2 border text-[14px] text-[#656D72] font-normal border-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-400 "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-[48px] px-4 py-2 border text-[14px] text-[#656D72] font-normal border-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Message"
                className="w-full h-[189px] px-4 py-2 border text-[14px] text-[#656D72] font-normal border-white rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <button
                type="submit"
                className="w-full h-[49px] py-[16px] px-[24px] bg-[#7E74F1] text-[#F5F3FE] text-[14px] rounded-[8px] hover:bg-purple-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right (Contact Info) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 font-body">
            <div className="md:mt-[70px] mt-2 md:ml-[80px] ml-0">
              <div className="md:space-y-[48px] space-y-[32px] leading-[30px]">
                {/* กล่อง 1 */}
                <div className="text-gray-700 flex flex-row gap-6">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#F5F3FE] dark:bg-[#FFFFFF] flex items-center justify-center">
                    <CiMapPin className="text-[#7E74F1] text-[27px] items-center" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-medium text-[16px] text-[#232E35] dark:text-[#FFFFFF]">Address</h2>
                    <p className="font-normal text-[14px] text-[#656D72] dark:text-[#FFFFFF]">330/37 Bang Sue, Bang Sue, Bangkok</p>
                  </div>
                </div>

                {/* กล่อง 2 */}
                <div className="text-gray-700 flex flex-row gap-6">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#F5F3FE] dark:bg-[#FFFFFF] flex items-center justify-center">
                    <FiPhoneCall className="text-[#7E74F1] text-[20px] items-center" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-medium text-[16px] text-[#232E35] dark:text-[#FFFFFF]">Phone</h2>
                    <p className="font-normal text-[14px] text-[#656D72] dark:text-[#FFFFFF]">061-260-1997</p>
                  </div>
                </div>

                {/* กล่อง 3 */}
                <div className="text-gray-700 flex flex-row gap-6">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#F5F3FE] dark:bg-[#FFFFFF] flex items-center justify-center">
                    <AiOutlineMail className="text-[#7E74F1] text-[25px] items-center" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-medium text-[16px] text-[#232E35] dark:text-[#FFFFFF]">E-Mail</h2>
                    <p className="font-normal text-[14px] text-[#656D72] dark:text-[#FFFFFF]">suphanatchanlek@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
