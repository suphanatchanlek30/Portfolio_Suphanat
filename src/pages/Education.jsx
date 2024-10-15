import React from "react";
import { MdOutlineRemove } from "react-icons/md";
import htmlIcon from '../assets/icon/html.png';
import cssIcon from '../assets/icon/css.png';
import jsIcon from '../assets/icon/javascript.png';
import reactIcon from '../assets/icon/react.png';
import nextIcon from '../assets/icon/next.png';
import nodeIcon from '../assets/icon/node.png';
import TailwindcssIcon from '../assets/icon/aa.svg';
import FigmaIcon from '../assets/icon/figma.png';
import GitHubIcon from '../assets/icon/github.png';
import MongoDBIcon from '../assets/icon/mongodb.png';
import MySQLIcon from '../assets/icon/mysql.png';
import GitIcon from '../assets/icon/git.png';

const skills = [
  { name: "HTML", img: htmlIcon },
  { name: "CSS", img: cssIcon },
  { name: "JavaScript", img: jsIcon},
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

const Education = () => {
  return (
    <div className="container mx-auto flex flex-col font-body p-5">
      {/* ข้อความ */}
      <div className="md:pt-[150px] pt-[50px] md:pb-24">
        <div className="flex items-center justify-start">
          <MdOutlineRemove className="text-[#D9D9D9] mr-4 md:text-[30px] text-[28px] items-center" />
          <p className="md:text-[16px] text-[14px] font-medium text-[#656D72] md:tracking-[7.5px] tracking-[6.5px] text-center">
            MY WORKS
          </p>
        </div>

        <h1 className="md:text-start md:text-[36px] font-bold text-[#232E35] md:mt-8 text-center text-[40px] mt-6">
          Featured Portfolios
        </h1>
      </div>

      {/* Education & Skill */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* left */}
        <div className="bg-red-900 w-full md:w-1/2">test</div>

        {/* Right */}
        <div className="bg-white w-full md:w-1/2">
          {/* text */}
          <div>
            <p className="text-[#656D72] text-[16px] leading-[32px]">
              I have been continuously learning in the field of front-end and
              experimenting with new technologies and frameworks, and here you
              can see a summary of my skills.
            </p>
          </div>

          {/* logo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4"
              >
                <div className="bg-[#EFEFEF] p-[10px] rounded-xl shadow-lg">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-[46px] h-[46px] object-contain"
                />
                </div>
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
