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
import Heading from "./Heading";

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
      // desc: "Have a good understanding of React, Hooks, Redux-Toolkit and Axios",
    },
    {
      id: 2,
      title: "HTML 5",
      icon: <FaHtml5 />,
      color: "bg-orange-500",
      // desc: "Started journey as a Web Developer in 2021, Aware about latest HTML, Semantic HTML",
    },
    {
      id: 3,
      title: "CSS 3",
      icon: <FaCss3 />,
      color: "bg-amber-500",
      // desc: "Enough hands on practises on vanila css,focused mainely on flex,grid and mobile responsive development",
    },
    {
      id: 4,
      title: "Javascript",
      icon: <SiJavascript />,
      color: "bg-green-500",
      // desc: "Learned JS by developing projects on it,Have good knowledge of closure,Promises",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "bg-teal-500",
      // desc: "Using Tailwind css we can quickly develope any webapp, This portfolio is one of them",
    },
    {
      id: 6,
      title: "Django",
      icon: <SiDjango />,
      color: "bg-rose-500",
      // desc: "Completed 3 months of internship in this domain along with Ecommerce app,REST API",
    },
    {
      id: 7,
      title: "Django REST API",
      icon: <TbApi />,
      color: "bg-violet-500",
      // desc: "I build APIs for my frontend app using Django REST API,JWT AUTH,JSON",
    },
    {
      id: 8,
      title: "Github",
      icon: <FaGithub />,
      color: "bg-zinc-500",
      // desc: "Have basic knowledge of github,how to Initialize,branch,merging branch to main branch",
    },
    {
      id: 9,
      title: "Bootstrap",
      icon: <FaBootstrap />,
      color: "bg-sky-500",
      // desc: "As I started my journey as a webdeveloper I learned Bootstrap to develop App on the go",
    },
  ];

  return (
    <>
      <div
        name="about"
        className="about-me bg-[#fafafa] dark:bg-[#252525] mt-12 flex flex-col items-center sm:mt-48 py-12 transition-all duration-1000 ease-in-out overflow-hidden"
      >
        <Heading title={"ABOUT ME"} animProp={"slideInBottom"} />

        <div className="flex flex-col lg:flex-row mt-8 md:mt-28">
          <div className="flex flex-col items-center justify-center gap-y-12 px-8 sm:px-20 lg:px-10  w-full lg:w-1/2">
            <h3 className="text-xl md:text-3xl font-bold lg:self-start self-center  text-slate-600 dark:text-gray-300">
              GET TO KNOW ME
            </h3>
            <p className="leading-8 font-normal text-gray-600 text-[18px] dark:text-gray-400">
              I am a front-end web developer who specializes in using JavaScript
              to optimize web applications. I have worked extensively with React
              js, tailwind css, vanila js and vanila css. I am also familiar
              with Django and Django REST Framework. I am a hard worker who is
              always looking to learn new skills and improve my work.
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then just say <b>Hello</b>.
            </p>
            <div className="flex w-full justify-between [&>*]:flex-grow [&>*]:p-2 [&>*]:flex-col [&>div>p]:text-gray-400 [&>div>h6]:text-slate-800 border-t">
              <div className="flex">
                <h6 className="dark:text-gray-200">Phone</h6>
                <p>7972496340</p>
              </div>
              <div className="flex">
                <h6 className="dark:text-gray-200">Email</h6>
                <p>sadachaudhari@gmail.com</p>
              </div>
              {/* <div className="flex">
                <h6>Linkedin</h6>
              </div> */}
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 flex flex-col px-10 mt-12 lg:mt-0 sm:px-20 lg:px-10 gap-y-12"
            ref={ref}
          >
            <div className="col-span-full flex items-center">
              <h3 className="text-xl md:text-3xl font-bold text-slate-600 uppercase dark:text-gray-400">
                My Skills
              </h3>
            </div>
            <div
              className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 skill-cards gap-6 
             transition duration-1000 ease-in-out"
            >
              {skills.map((skill) => {
                const animDelay = "anim-delay-" + 100 * skill.id;

                return (
                  <div
                    key={skill.id}
                    className={`${
                      inView ? "animate-slideInBottom" + " " + animDelay : ""
                    } dark:[&>svg]:text-teal-500 [&>svg]:text-5xl p-3  min-w-[175px] flex items-center gap-4 rounded-md shadow-sm
            opacity-0 transition-all duration-500 ease-in-out bg-white dark:bg-[#363636] dark:text-white`}
                  >
                    <div
                      className={`skill-icon text-white  
                  rounded p-2 text-2xl ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <h4 className="text-gray-900 font-semibold text-sm md:text-base   dark:text-teal-400 transition duration-1000 ease-in-out">
                      {skill.title}
                    </h4>
                    {/* <p className="text-gray-600 dark:text-gray-200 text-sm"> */}
                    {/* {skill.desc} */}
                    {/* </p> */}
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
