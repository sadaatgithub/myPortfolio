import React from "react";
import { useInView } from "react-intersection-observer";
import project1 from "../assets/project_imgs/Project_NHR_1.png";
import project2 from "../assets/project_imgs/Stripe_Submenu.png";
import project3 from "../assets/project_imgs/react-to-do.png";

import EachProject from "./EachProject";
import Heading from "./Heading";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Replica Of National Hemophilia Registry",
      desc: "Mentain all over India's patients data",
      techStack: [
        "React",
        "Redux-Toolkit",
        "React-Router-dom",
        "Axios",
        "Chart.js",
        "Django REST API",
        "JWT AUTH",
        "Export-Table-To-Excel",
      ],
      image: project1,
      gitLink: "https://github.com/sadaatgithub/dashboard",
      isOngithub:true,
    },

    {
      id: 2,
      title: "Stripe UI",
      desc: "Stripe Responsive UI",
      techStack: ["React", "React-Hooks","useContext","Tailwind css"],
      image: project2,
      gitLink:"https://github.com/sadaatgithub/StripeSubmenu",
      isOngithub:true,
    },
    {
      id: 3,
      title:"To-DO",
      desc: "A React to-do app",
      techStack: [
        "React",
        "React-hooks",
        
      ],
      image: project3,
      gitLink:"https://github.com/sadaatgithub/react_todo_app",
      isOngithub:true,
    },
    {
      id: 4,
      title: "Project Four",
      desc: "This is project no 4",
      techStack: [
        "React",
        "Redux-Toolkit",
        "React-Router-dom",
        "Axios",
        "Chart.js",
        "Django REST API",
        "JWT AUTH",
      ],
      image: project2,
      gitLink:"",
      isOngithub:false,
    },
    {
      id: 5,
      title: "Project Five",
      desc: "This is project no 5",
      techStack: [
        "React",
        "Redux-Toolkit",
        "React-Router-dom",
        "Axios",
        "Chart.js",
        "Django REST API",
        "JWT AUTH",
      ],
      image: project2,
      gitLink:"",
      isOngithub:false,
    },
    {
      id: 6,
      title: "Project Six",
      desc: "This is project no 6",
      techStack: [
        "React",
        "Redux-Toolkit",
        "React-Router-dom",
        "Axios",
        "Chart.js",
        "Django REST API",
        "JWT AUTH",
      ],
      image: project1,
      gitLink:"",
      isOngithub:false,
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    // threshold:0.1,
  });

  return (
    <>
      <div
        name="projects"
        id="projects"
        className="flex flex-col items-center sm:mt-36 min-h-[100vh] dark:bg-[#252525] py-8 transition-all duration-1000 ease-in-out overflow-hidden"
      >
        <Heading title={"PROJECTS"} inView={inView} animProp={"slideInBottom"} />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row  mt-24 px-1 sm:px-10 "
        >
          {projects.filter((project) => project.isOngithub === true).map((data, index) => {
            const animDelay = "anim-delay-" + 100 * index;
            return (
              <EachProject key={data.id} {...data} animDelay={animDelay} />
            );
          })}

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

          
          {/* <div className={`${inView? "animate-slideInRight transition-all anim-delay-400":"hidden"} rounded border-[1px] max-w-sm overflow-hidden group hover:shadow-2xl transition-all `}>
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
      </div>
    </>
  );
};

export default Projects;
