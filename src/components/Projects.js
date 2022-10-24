import React from 'react'
import { useInView } from 'react-intersection-observer';
import project1 from "../assets/project_imgs/Project_NHR_1.png"
import project2 from "../assets/project_imgs/Stripe_Submenus.png"
import project3 from "../assets/imgs/project3.jpg"
import EachProject from './EachProject';
import Heading from './Heading';

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
        // triggerOnce: true,
        threshold:0.1,
       
      });


  return (
    <>
    <div  name="projects" id="projects" className="flex flex-col items-center sm:mt-36 min-h-[100vh] dark:bg-[#252525] py-8 transition duration-500 ease-in-out overflow-hidden">
   
      <Heading title={"PROJECTS"} inView={inView} animProp={"slideInLeft"}/>

    <div ref={ref} className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-24">


        {projects.map((data,index) =>{
          const animDelay = "anim-delay-" + 100*index
            return <EachProject key={data.id}  {...data} animDelay={animDelay}/>})}

{/* <div className={`${inView? "animate-slideInRight transition-all anim-delay-400":"hidden"} rounded border-[1px] max-w-sm overflow-hidden group hover:shadow-2xl transition-all `}>
              <img src={project1} alt="project3" loading='lazy' className="w-full  rounded-t-sm group-hover:scale-105 transition"/>
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


          
    </div>
  </div></>
  )
}

export default Projects