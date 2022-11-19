import React from 'react'
import { FaHtml5, FaCss3, FaGithub, FaReact,FaBootstrap} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';
import Heading from './Heading';

const About = () => {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.1,
   
  });

  const skills = [
    { id:1,title:"React JS",icon:<FaReact/>,color:"bg-blue-500",desc:"Have a good understanding of React, Hooks, Redux-Toolkit and Axios"},
    { id:2,title:"HTML 5",icon:<FaHtml5/>,color:"bg-orange-500",desc:"Started journey as a Web Developer in 2021, Aware about latest HTML, Semantic HTML"},
    { id:3,title:"CSS 3",icon:<FaCss3/>,color:"bg-amber-500",desc:"Enough hands on practises on vanila css,focused mainely on flex,grid and mobile responsive development"},
    { id:4,title:"Javascript",icon:<SiJavascript/>,color:"bg-green-500",desc:"Learned JS by developing projects on it,Have good knowledge of closure,Promises"},
    { id:5,title:"Tailwind CSS",icon:<SiTailwindcss/>,color:"bg-teal-500",desc:"Using Tailwind css we can quickly develope any webapp, This portfolio is one of them"},
    { id:6,title:"Django",icon:<SiDjango/>,color:"bg-rose-500",desc:"Completed 3 months of internship in this domain along with Ecommerce app,REST API"},
    { id:7,title:"Django REST API",icon:<TbApi/>,color:"bg-violet-500",desc:"I build APIs for my frontend app using Django REST API,JWT AUTH,JSON"},
    { id:8,title:"Github",icon:<FaGithub/>,color:"bg-zinc-500",desc:"Have basic knowledge of github,how to Initialize,branch,merging branch to main branch"},
    { id:9,title:"Bootstrap",icon:<FaBootstrap/>,color:"bg-sky-500",desc:"As I started my journey as a webdeveloper I learned Bootstrap to develop App on the go"},


  ]

  return (
    <>
    <div name="skills" className="about-me bg-[#fafafa] dark:bg-[#252525] mt-12 flex flex-col items-center sm:mt-48 py-12 transition-all duration-1000 ease-in-out overflow-hidden">
  
    <Heading title={"SKILLS"}  animProp={"slideInBottom"}/>
    
    <div ref={ref}  className="grid sm:grid-cols-2 lg:grid-cols-3  grid-flow-row w-full  mt-24 skill-cards gap-y-10 gap-x-10 [&>*]:bg-white
    [&>*]:dark:text-white [&>*]:dark:bg-[#363636] transition duration-1000 ease-in-out place-items-stretch  px-1 sm:px-10">

          {skills.map((skill) =>{
             
              const animDelay = "anim-delay-"+ 100 * skill.id

            return <div key={skill.id} className={`${inView? "animate-slideInBottom" + " "+ animDelay :""} dark:[&>svg]:text-teal-500 [&>svg]:text-5xl relative flex flex-col p-4 rounded-md shadow-sm w-full 
            opacity-0 transition-all duration-500 ease-in-out`}>
              
                  <div className= {`absolute -top-5 left-4 p-2 skill-icon text-white  
                  rounded text-2xl ${skill.color}`}> {skill.icon}</div>
                
              <h4 className="text-gray-900 font-semibold py-3   dark:text-teal-400 transition duration-1000 ease-in-out">{skill.title}</h4>
              <p className="text-gray-600 dark:text-gray-200 text-sm">{skill.desc}</p>
              </div>
          })}

     
    </div>
  </div></>
  )
}

export default About