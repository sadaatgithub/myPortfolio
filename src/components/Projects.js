import React from 'react'
import { useInView } from 'react-intersection-observer';
import project1 from "../assets/imgs/project1.jpg"
import project2 from "../assets/imgs/project2.jpg"
import project3 from "../assets/imgs/project3.jpg"
import EachProject from './EachProject';

const Projects = () => {

    const projects = [
        {id:1,title:'Ecomm App',desc:"Indias fastest growing eccommerce app",image:project1},
        {id:2,title:'Project Two',desc:"This is project no 2",image:project2},
        {id:3,title:'Project Three',desc:"This is project no 3",image:project3},
        {id:4,title:'Project Four',desc:"This is project no 4",image:project3},
        {id:5,title:'Project Five',desc:"This is project no 5",image:project2},
        {id:6,title:'Project Six',desc:"This is project no 6",image:project1},

    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
        // threshold:0.3,
       
      });


  return (
    <>
    <div  name="projects" id="projects" className="flex flex-col items-center sm:mt-36 min-h-[100vh]">
    <h2 className= {`${inView? "animate-fadeIn transition-all":"opacity-0"} text-center mt-4 text-2xl sm:text-4xl font-bold  text-slate-700 mb-2  p-2  tracking-wider  border-b-4 border-teal-400 `}>
      PROJECTS
    </h2>

{/* flex flex-col justify-center items-center sm:flex-row sm:flex-wrap */}
    <div ref={ref} className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-24">


        {projects.map((data) =>{
            return <EachProject key={data.id} inView={inView} {...data}/>})}



          {/* 
          <div className={`${inView? "animate-slideInRight transition-all anim-delay-400":"hidden"} rounded border-[1px] max-w-sm overflow-hidden group hover:shadow-2xl transition-all `}>
              <img src={project3} alt="project3" loading='lazy' className="w-full h-[275px] rounded-t-sm group-hover:scale-105 transition"/>
              <div className="p-4">
                  <h4 className="mt-4">Project 3</h4>
                  <p className="text-slate-500 text-sm">Indias fastest growing eccommerce app</p>
                  <div className="flex justify-between mt-4">
                      <button className="px-4 py-2 bg-sky-500 text-white
                      rounded">VIEW CODE</button>
                       <button className="px-4 py-2 border border-gray-300
                      rounded hover:border-gray-700">LIVE DEMO</button>
                  </div>
              </div>
          </div> */}


          {/* 

          <div className={`${inView? "animate-slideInRight transition-all anim-delay-300":"opacity-0"} rounded border-[1px] sm:max-w-sm
                            h-[300px] relative overflow-hidden group transition-all card before:bg-teal-400/90`}>
              <img src={project2} alt="project3"  className="w-full object-cover h-full rounded-t-sm group-hover:scale-105 transition"/>
             
              <div className="p-4 absolute inset-0 z-10 flex flex-col justify-between">
                <div className="transform -translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  <h4 className="mt-4 text-white text-xl">Project 3</h4>
                  <p className="text-white text-sm">Indias fastest growing eccommerce app</p>
                  </div>

                  <div className="opacity-0 flex justify-between items-center transform translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                      <button className="px-4 py-2 bg-[#2b3546] text-white
                      rounded">VIEW CODE</button>
                       <button className="text-white px-4 py-2 border border-gray-300
                      rounded hover:border-gray-700">LIVE DEMO</button>
                  </div>
              </div>
          </div>

        */}
    </div>
  </div></>
  )
}

export default Projects