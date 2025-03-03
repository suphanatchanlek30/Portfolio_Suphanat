import React from "react";
import { MdOutlineRemove } from "react-icons/md";
import htmlIcon from "../assets/icon/html.png";
import cssIcon from "../assets/icon/css.png";
import jsIcon from "../assets/icon/javascript.png";
import reactIcon from "../assets/icon/react.png";
import nextIcon from "../assets/icon/next.png";
import nodeIcon from "../assets/icon/node.png";
import TailwindcssIcon from "../assets/icon/aa.svg";
import FigmaIcon from "../assets/icon/figma.png";
import GitHubIcon from "../assets/icon/github.png";
import MongoDBIcon from "../assets/icon/mongodb.png";
import MySQLIcon from "../assets/icon/mysql.png";
import GitIcon from "../assets/icon/git.png";

const skills = [
  { name: "HTML", img: htmlIcon },
  { name: "CSS", img: cssIcon },
  { name: "JavaScript", img: jsIcon },
  { name: "React.js", img: reactIcon },
  { name: "Next.js", img: nextIcon },
  { name: "Node.js", img: nodeIcon },
  { name: "Tailwind", img: TailwindcssIcon },
  { name: "Figma", img: FigmaIcon },
  { name: "Git-Hub", img: GitHubIcon },
  { name: "MongoDB", img: MongoDBIcon },
  { name: "MySQL", img: MySQLIcon },
  { name: "Git", img: GitIcon },
];

const timelineData = [
  {
    title: "Thammasat University",
    description: "Bachelor's degree - Computer Science",
    date: "2024 - Present",
  },
  {
    title: "King Mongkut's University of Technology North Bangkok",
    description: "Bachelor's degree - Computer Science",
    date: "2022 - 2023 (1 Year)",
  },
  {
    title: "Watkhemapirataram School",
    description: "Mathematics and English Program",
    date: "2016 - 2022",
  },
];

const Education = () => {
  return (
    <div className="container mx-auto flex flex-col font-body p-5 dark:font-body">
      {/* ข้อความ */}
      <div className="md:pt-[75px] pt-[50px] md:pb-24">
        <div className="flex items-center justify-start">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 md:text-[30px] text-[28px] items-center" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center dark:text-[#FFFFFF]">
            MY WORKS
          </p>
        </div>

        <h1 className="md:text-start md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[35px] mt-6 dark:text-[#FFFFFF]">
          Education & Skills
        </h1>
      </div>

      {/* Education & Skill */}
      <div className="flex flex-col md:flex-row md:gap-5 gap-4 md:mb-16 mb-8">
        {/* left */}
        <div className="w-full md:w-1/2">
          <div className="p-4">
            <div className="relative md:mt-0 mt-4">
              {/* line */}
              <div className="absolute inset-0 flex items-center justify-start md:pl-[12px] pl-[10px]">
                <div className="h-full w-[1px] bg-[#F1F1F1]"></div>
              </div>

              {timelineData.map((item, index) => (
                <div
                  className="relative flex items-start mb-[40px] md:mb-[64px]"
                  key={index}
                >
                  {/* Circle marker */}
                  <div className="flex justify-center items-center md:p-3 p-[10px] w-[22px] h-[22px] bg-[#F1F1F1] rounded-full"></div>
                  {/* Content */}
                  <div className="ml-4 md:ml-6 leading-[30px]">
                    <h3 className="text-[16px] md:text-[18px] font-medium text-[#232E35] leading-[30px] dark:text-[#FFFFFF]">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] font-normal text-[#656D72] leading-[30px] dark:text-[#FFFFFF]">
                      {item.description}
                    </p>
                    <p className="text-[14px] md:text-[16px] font-medium text-[#232E35] leading-[30px] dark:text-[#FFFFFF]">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className=" w-full md:w-1/2 md:pt-2 pt-0">
          {/* text */}
          <div>
            <p className="text-[#656D72] text-[14px] md:text-[16px] leading-[32px] px-4 pb-10 dark:text-[#FFFFFF]">
              I have been continuously learning in the field of front-end and
              experimenting with new technologies and frameworks, and here you
              can see a summary of my skills.
            </p>
          </div>

          {/* logo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-3 px-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 p-3">
                <div className="bg-[#EFEFEF] p-[8px] rounded-xl shadow-lg">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] object-contain"
                  />
                </div>
                <p className="text-xs md:text-sm font-semibold dark:text-[#FFFFFF]">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
