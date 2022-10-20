import React from 'react'
import { FaHtml5, FaCss3, FaGithub, FaReact,FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.3,
   
  });

  return (
    <>
    <div name="skills" ref={ref} className="about-me bg-[#fafafa] mt-12 flex flex-col items-center sm:mt-48 p-2">
    <h2
      className="text-center mt-4 text-3xl sm:text-4xl font-bold text-slate-700 mb-2
               w-auto p-2 tracking-wider border-b-4 border-teal-400"
    >
      SKILLS
    </h2>
    
    <div className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap gap-2 w-full mt-24 [&>*]:skill-cards [&>*]:h-[150px] [&>*]:bg-white">
      <div className={`${inView? "animate-scaleDownCenter anim-delay-100":""} flex justify-center`}>
        <FaHtml5 size={50} color={'orange'} />
        <h4 className="font-semmibold">HTML 5</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-200":""} flex justify-center`}>
        <FaCss3 size={50} color={'blue'} />
        <h4 className="font-semmibold">CSS3</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-300":""} flex justify-center`}>
        <SiJavascript size={50} className="text-[red]" />
        <h4 className="font-semmibold">Javascript</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-400":""} flex justify-center`}>
        <FaReact size={50} className="text-teal-500" />
        <h4 className="font-semmibold">React</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-500":""} flex justify-center`}>
        <SiTailwindcss size={50} className="text-sky-600" />
        <h4 className="font-semmibold">Tailwind CSS</h4>
      </div>
      
      <div className={`${inView? "animate-scaleDownCenter anim-delay-600":""} flex justify-center`}>
        <FaGithub size={50} color={'#252525'} />
        <h4 className="font-semmibold">Github</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-700":""} flex justify-center`}>
        <SiDjango size={50} className="text-teal-600" />
        <h4 className="font-semmibold">Django</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-800":""} flex justify-center`}>
        <TbApi size={50} />
        <h4 className="font-semmibold">Django REST API</h4>
      </div>
      <div className={`${inView? "animate-scaleDownCenter anim-delay-500":""} flex justify-center`}>
        <FaBootstrap size={50} color={'blue'} />
        <h4 className="font-semmibold">Bootstrap</h4>
      </div>
    </div>
  </div></>
  )
}

export default About