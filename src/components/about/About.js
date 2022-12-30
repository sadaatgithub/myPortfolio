import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaGithub,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import Heading from "../Heading";
import Summary from "./Summary";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      id: 1,
      title: "React JS",
      icon: <FaReact />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "HTML 5",
      icon: <FaHtml5 />,
      color: "bg-orange-500",
    },
    {
      id: 3,
      title: "CSS 3",
      icon: <FaCss3 />,
      color: "bg-amber-500",
    },
    {
      id: 4,
      title: "JavaScript",
      icon: <SiJavascript />,
      color: "bg-neutral-500",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "bg-teal-500",
    },
    {
      id: 6,
      title: "Django",
      icon: <SiDjango />,
      color: "bg-rose-500",
    },
    {
      id: 7,
      title: "Django REST API",
      icon: <TbApi />,
      color: "bg-violet-500",
    },
    {
      id: 8,
      title: "GitHub",
      icon: <FaGithub />,
      color: "bg-slate-500",
    },
    {
      id: 9,
      title: "Bootstrap",
      icon: <FaBootstrap />,
      color: "bg-sky-500",
    },
  ];

  return (
    <>
      <div
        name="about"
        className="about-me bg-[#fafafa] dark:bg-[#252525] mt-12 flex flex-col items-center sm:mt-36 py-12 transition-all duration-1000 ease-in-out overflow-hidden min-h-screen"
      >
        <Heading title={"ABOUT ME"} animProp={"slideInBottom"} />

        <div className="flex flex-col lg:flex-row mt-8 md:mt-28">
         <Summary/>

          <div
            className="w-full lg:w-1/2 flex flex-col px-4 mt-12 lg:mt-0 sm:px-20 lg:px-10 gap-y-12"
            ref={ref}
          >
            <div className="col-span-full flex items-center w-full justify-center md:justify-start">
              <h3 className={`${inView? "animate-slideInBottom":"opacity-0"} text-xl md:text-2xl self-start font-bold text-slate-600 uppercase dark:text-gray-400`}>
                My Skills
              </h3>
            </div>
            <div
              className="w-full flex flex-wrap justify-center lg:justify-start items-center skill-cards gap-4 sm:gap-6 
             transition duration-1000 ease-in-out [&>*>nth-child(last)]:bg-red-600"
            >
              {skills.map((skill) => {
                const animDelay = "anim-delay-" + 100 * skill.id;

                return (
                  <div
                    key={skill.id}
                    className={`${
                      inView ? "animate-slideInBottom" + " " + animDelay : ""
                    } dark:[&>svg]:text-teal-500 [&>svg]:text-5xl w-[80%] xs:w-[150px] sm:w-[175px]  flex items-center gap-4 rounded-md shadow-sm
            opacity-0 transition-all duration-500 ease-in-out bg-white dark:bg-[#363636] dark:text-white border dark:border-teal-800 overflow-hidden`}
                  >
                    <div
                      className={`skill-icon text-white  
                   p-4 text-2xl ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <h4 className="text-slate-600 font-semibold text-base  tracking-wide  dark:text-teal-400 transition duration-1000 ease-in-out">
                      {skill.title}
                    </h4>
                   
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
