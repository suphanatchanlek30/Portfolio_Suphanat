import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { MdOutlineRemove } from 'react-icons/md'
import { IoLinkOutline } from "react-icons/io5";

const Work = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const portfolioItems = [
    {
      img: "https://via.placeholder.com/500x300",
      title: "Agency Website.",
      tech1: ["WordPress", "React"],
      link: "#",
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Dashboard Website.",
      tech1: ["React"],
      link: "#",
    },
    {
      img: "https://via.placeholder.com/500x300",
      title: "Support Center Website.",
      tech1: ["PHP"],
      link: "#",
    },
    {
        img: "https://via.placeholder.com/500x300",
        title: "Support Center Website.",
        tech1: ["PHP"],
        link: "#",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] font-body md:p-9 p-4 dark:bg-[#171717]">
    <div className="container mx-auto font-body pt-10 relative md:pb-[150px] pb-[50px] ">
      {/* ข้อความ */}
      <div className="container mx-auto md:pt-[75px] pt-[50px] md:pb-32">
        <div className="flex items-center justify-start">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 md:text-[30px] text-[28px] items-center" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center dark:text-[#FFFFFF]">
            MY WORKS
          </p>
        </div>
        <div className="flex md:justify-between md:flex-row flex-col">
        <h1 className="md:text-start md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[35px] mt-6 dark:text-[#FFFFFF]">
          Featured Portfolios
        </h1>
        {/* Custom Navigation */}
        <div className="flex md:flex md:flex-row md:justify-end md:items-end md:relative md:bottom-0 absolute bottom-[-20px] md:right-[0px] right-1/3 m-4 items-center md:mt-0 mt-[50px] gap-[16px]">
        <div ref={prevRef} className="transform -translate-y-1/2 p-1 right-16 z-10 cursor-pointer text-[#a69ff0] hover:text-[#7E74F1] bg-[#EAE6FE] rounded-[16px] ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div ref={nextRef} className="transform -translate-y-1/2 p-1 right-8 z-10 cursor-pointer text-[#a69ff0] hover:text-[#7E74F1] bg-[#EAE6FE] rounded-[16px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </div>
        </div>
        </div>
      </div>

      
    
    {/* Swiper */}
    <div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="my-10"
        breakpoints={{
            0: {
              slidesPerView: 1, // จะแสดง 1 slide ในหน้าจอเล็กกว่า 640px
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // จะแสดง 2 slides ในหน้าจอเล็กกว่า 768px
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // จะแสดง 3 slides ในหน้าจอใหญ่กว่า 1024px
              spaceBetween: 40,
            },
        }}
        onSwiper={(swiper) => {
            if (prevRef.current && nextRef.current) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.update();
            }
          }}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-[18px] font-medium text-[#232E35]">{item.title}</h3>
                <div className="flex items-center justify-start mt-1 gap-[18px]">
                {item.tech1.map((tech, techIndex) => (
                    <div key={techIndex}>
                        <p className="text-[14px] text-[#656D72] border pr-[8px] pl-[8px] pt-[4px] pb-[4px] rounded-[4px] mt-[15px] border-gray-30">{tech}</p>
                    </div>
                 ))}
                  <a href={item.link} className="text-[#656D72] hover:text-gray-600">
                    <IoLinkOutline className="text-[28px] items-center justify-center mt-4"/>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Work;
