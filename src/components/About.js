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
   { id:1,title:"React JS",icon:<FaReact/>},
   { id:2,title:"HTML 5",icon:<FaHtml5/>},
   { id:3,title:"CSS 3",icon:<FaCss3/>},
   { id:4,title:"Tailwind CSS",icon:<SiTailwindcss/>},
   { id:5,title:"Javascript",icon:<SiJavascript/>},
   { id:6,title:"Django",icon:<SiDjango/>},
   { id:7,title:"Django REST API",icon:<TbApi/>},
   { id:8,title:"Github",icon:<FaGithub/>},
   { id:9,title:"Bootstrap",icon:<FaBootstrap/>},
   


  ]

  return (
    <>
    <div name="skills" ref={ref} className="about-me bg-[#fafafa] dark:bg-[#252525] mt-12 flex flex-col items-center sm:mt-48 py-12">
  
    <Heading title={"SKILLS"} inView={inView} animProp={"slideInRight"}/>
    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full sm:w-2/3 mt-24 [&>*]:skill-cards gap-2 [&>*]:bg-white
    [&>*]:dark:text-white [&>*]:dark:bg-[#454545]">

          {skills.map((skill) =>{
              const animDelay = "anim-delay-"+ 100 * skill.id
            return <div className={`${inView? "animate-scaleDownCenter" + " "+ animDelay:""} [&>svg]:text-gray-700 flex justify-center [&>svg]:text-5xl`}>
              {skill.icon}
              <h4 className="font-semmibold">{skill.title}</h4>
            </div>
          })}

     
    </div>
  </div></>
  )
}

export default About