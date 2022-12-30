import React from 'react'
import ResumeButton from './buttons/ResumeButton'


const Hero = () => {
  return (
    <>
    <main
          name="home"
          className="hero-banner relative flex justify-center items-center w-full  text-gray-800 h-[100vh] bg-hero-pattern2 bg-cover bg-center overflow-hidden]"
        >
          <div
            className="flex p-6 flex-col justify-center items-center gap-4 text-center z-10
              flex-grow-1  border-1"
          >
            <div className="mt-14 text-4xl sm:text-5xl md:text-6xl font-nunito font-semibold text-white dark:text-gray-200  sm:mt-6 overflow-hidden">
              <h1 className="uppercase animate-slideInBottom transition-all anim-delay-500">
                <span className="">Hi <span className="text-teal-400">,</span> I am <span className="text-teal-400">,</span> </span>
                <span className="">Sadanand</span>
              </h1>
            </div>
            <div className="overflow-hidden">
            <h3 className="text-blue-400 uppercase text-xl mt-4 sm:text-3xl font-port-ligat-sans font-bold tracking-widest animate-slideInBottom transition-all anim-delay-800">
              Frontend Web Developer
            </h3>
            </div>
            <div className="overflow-hidden flex justify-center">
            <p className="text-base w-auto text-center sm:w-1/2 sm:text-base mt-2 text-white/80 animate-slideInBottom transition-all anim-delay-900 dark:text-gray-400">
            A Frontend focused Web Developer building the Frontend of Websites and 
            Web Applications that leads to the success of the overall product
            </p>
            </div>
           
             <ResumeButton text={"GET RESUME"}/>
          </div>
        
        </main>

    </>
  )
}

export default Hero