import React from 'react'
import { FaHtml5, FaCss3, FaGithub, FaReact,FaBootstrap} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';
import Heading from './Heading';

const About = () => {



  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.3,
   
  });

  const skills = [
   { id:1,title:"React JS",icon:<FaReact/>,color:"bg-blue-500"},
   { id:2,title:"HTML 5",icon:<FaHtml5/>,color:"bg-orange-500"},
   { id:3,title:"CSS 3",icon:<FaCss3/>,color:"bg-amber-500"},
   { id:4,title:"Javascript",icon:<SiJavascript/>,color:"bg-green-500"},
   { id:5,title:"Tailwind CSS",icon:<SiTailwindcss/>,color:"bg-teal-500"},
   { id:6,title:"Django",icon:<SiDjango/>,color:"bg-rose-500"},
   { id:7,title:"Django REST API",icon:<TbApi/>,color:"bg-violet-500"},
   { id:8,title:"Github",icon:<FaGithub/>,color:"bg-zinc-500"},
   { id:9,title:"Bootstrap",icon:<FaBootstrap/>,color:"bg-sky-500"},
   


  ]

  return (
    <>
    <div name="skills" ref={ref} className="about-me bg-[#fafafa] dark:bg-[#252525] mt-12 flex flex-col items-center sm:mt-48 py-12 transition duration-1000 ease-in-out">
  
    <Heading title={"SKILLS"} inView={inView} animProp={"slideInRight"}/>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full  mt-24 skill-cards gap-y-10 gap-x-10 [&>*]:bg-white
    [&>*]:dark:text-white [&>*]:dark:bg-[#363636] transition duration-1000 ease-in-out place-items-center  px-1 sm:px-10">

          {skills.map((skill) =>{
              const animDelay = "anim-delay-"+ 100 * skill.id

            return <div key={skill.id} className={`${inView? "animate-scaleDownCenter" + " "+ animDelay:""}
              dark:[&>svg]:text-teal-500 [&>svg]:text-5xl relative flex flex-col justify-start p-4 rounded-md shadow-sm`}>
              <div className= {`absolute -top-5 left-4 p-2 skill-icon text-white  
              rounded text-2xl ${skill.color}`}> {skill.icon}</div>
             
              <h4 className="font-semiBold text-neutral-800 py-2 text-xl dark:text-teal-400">{skill.title}</h4>
              <p className="text-sm text-neutral-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam ut, quia iure ullam quidem.</p>
            </div>
          })}

     
    </div>
  </div></>
  )
}

export default About