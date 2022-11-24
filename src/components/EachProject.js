import React from "react";
import { useInView } from 'react-intersection-observer';





const EachProject = ({animDelay,...data }) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.5,
   
  });

  return (
    <>

      {/* <div ref={ref} className={`${inView? animDelay + " " + "animate-slideInBottom":"opacity-0"} project-card rounded border-[1px] 
      max-w-md overflow-hidden group hover:shadow-2xl transition-all relative h-[250px] bg-gradient-to-r from-teal-400  to-teal-300`}>
               */}
              {/* <img src={data.image} alt="project3" loading='lazy' className="w-full rounded-t-sm group-hover:scale-110 transition-all duration-500 ease-in-out object-contain"/>

             
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
             </div> */}

<div ref={ref} className={`${inView? animDelay + " " + "animate-slideInBottom":"opacity-0"} rounded border-[1px] dark:border-gray-700 max-w-sm overflow-hidden group hover:shadow-2xl transition-all flex flex-col `}>
              <div className="overflow-hidden">
              <img src={data.image} alt="project3" loading='lazy' className="w-full object-contain rounded-t-sm group-hover:scale-110 transition-all duration-300"/>
              </div>
              <div className="p-4 flex flex-col flex-grow  dark:bg-gray-800">
                  <h4 className="mt-4 font-semibold dark:text-slate-300 uppercase">{data.title}</h4>
                  <p className="text-slate-500 text-sm dark:text-slate-400">{data.desc}</p>
                  <div class="flex flex-col mt-4">
                  <h4 className="mb-2 text-sm sm:text-base dark:text-white">TECH USED</h4>
                  
                  <ul className="flex text-xs gap-2 flex-wrap">

                {data.techStack.map((tech)=>{
                  return <li className="bg-gray-200 tracking-wide sm:py-1 p-1 sm:px-2 rounded-sm dark:bg-gray-700 dark:text-gray-200">{tech}</li>
                })}

                </ul>
                </div>
                  <div className="flex mt-4 md:mt-auto">
                      <button className="px-4 py-2 bg-teal-500 text-white border border-transparent hover:bg-white hover:border
                      hover:text-teal-600 hover:border-teal-600 transition-all duration-150 dark:bg-teal-500 dark:hover:bg-white
                      rounded ml-auto"><a href={data.gitLink} target="_blank">View Code</a></button>
                       {/* <button className="px-4 py-2 border border-gray-300
                      rounded hover:border-gray-700">LIVE DEMO</button> */}
                  </div>
              </div>
          </div>
             
              
          {/* </div> */}

      
    </>
  );
};

export default EachProject;
