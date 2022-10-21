import React from "react";
import { useInView } from 'react-intersection-observer';





const EachProject = ({...data }) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold:0.3,
   
  });

  return (
    <>
      <div ref={ref}
        className={`${
          inView
            ? "animate-fadeIn transition-all anim-delay-300"
            : "opacity-0"} rounded border-[1px] sm:max-w-sm h-[300px] relative overflow-hidden group transition-all card
         before:bg-teal-400/90`}
      >
        <img
          src={data.image}
          loading="lazy"
          alt="project3"
          className="w-full object-cover h-full rounded-t-sm group-hover:scale-150 transition duration-500"
        />

        <div className="absolute inset-0 z-10 flex flex-col justify-between">
          <div className=" p-2 transform -translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
            <h4 className="text-white text-xl">{data.title}</h4>
            <p className="text-gray-200 text-sm">
              {data.desc}
            </p>
          </div>

          <div className="p-2 opacity-0 flex justify-between items-center transform translate-y-16 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
            <button
              className="px-4 py-2 bg-[#2b3546] text-white rounded"
            >
              VIEW CODE
            </button>
            <button
              className="text-white font-base px-4 py-2 border border-gray-300 rounded hover:border-gray-700"
            >
              LIVE DEMO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProject;
