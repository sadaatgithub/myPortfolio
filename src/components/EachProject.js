import React from "react";
import { useInView } from 'react-intersection-observer';





const EachProject = ({animDelay,...data }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.5,
   
  });

  return (
    <>

      <div ref={ref} className={`${inView? animDelay + " " + "animate-slideInBottom ":"opacity-0"} project-card rounded border-[1px] max-w-md overflow-hidden group hover:shadow-2xl transition-all relative h-[250px] bg-gradient-to-r from-teal-400  to-teal-300`}>
              
              <img src={data.image} alt="project3" loading='lazy' className="w-full rounded-t-sm group-hover:scale-110 transition-all duration-500 ease-in-out object-contain"/>

             
             <div className="absolute w-full h-full z-10 -bottom-50 p-1 sm:p-2 text-[#ffff] opacity-1 group-hover:opacity-100 group-hover:bottom-0 flex flex-col">
              <div className="opacity-1 transition-all duration-300 delay-100 [transition-timing-function:cubic-bezier(.175,.885,.32,1.275)]">
              <h3 className="font-semibold  text-base uppercase">{data.title}</h3>
              <p className="text-xs sm:text-sm  pl-4  font-thin">{data.desc}</p>
              </div>
              <div className="mt-1 sm:mt-4 -translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-100 transition duration-300 [transition-timing-function:cubic-bezier(.175,.885,.32,1.275)]">
                <h4 className="mb-2 text-sm sm:text-base">TECH USED</h4>
                <ul className="flex text-xs gap-x-2 flex-wrap gap-y-1">

                {data.techStack.map((tech)=>{
                  return <li className="bg-teal-800/80 tracking-wide sm:py-1 p-1 sm:px-2  rounded-full font-thin">{tech}</li>
                })}

                </ul>
              </div>
              <div className="self-end mt-auto ">
                <button className="transform translate-y-[50px] !bg-[#252525] px-2 py-1 rounded group-hover:translate-y-0 transition duration-300 delay-100 [transition-timing-function:cubic-bezier(.175,.885,.32,1.275)]">
                 <a href={data.gitLink} target="_blank">View Code</a></button>
                  <button></button>
              </div>
             </div>

             
             
              
          </div>

      
    </>
  );
};

export default EachProject;
