import {MdDarkMode,MdOutlineLightMode} from "react-icons/md"
import { useRef, useState } from "react";

import Contact from "./Contact";
import Projects from "./Projects";
import About from "./about/About";
import ScrollHere from "./ScrollHere";
import Footer from "./Footer";
import Hero from "./Hero";
import ResumeButton from "./buttons/ResumeButton";
import NavLinks from "./navbar/NavLinks";


const Home = ({toggleTheme,toggle}) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const burgerState = useRef()


 const hamburgerHandler = () =>{
  const currentState = burgerState.current.getAttribute("data-state")
  if(!currentState || currentState === "closed"){

    burgerState.current.setAttribute("data-state","opened")
    burgerState.current.setAttribute("aria-expanded","true")
    setBurgerOpen(true)
  } else{
    closeBurgerOnLink()

  }
 }
 
 const closeBurgerOnLink = () =>{
  burgerState.current.setAttribute("aria-expanded","false")
  burgerState.current.setAttribute("data-state","closed")

  setBurgerOpen(false)
 }
 
  
  const [animateNav, setAnimateNav] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 90) {
      setAnimateNav(true);
    } else {
      setAnimateNav(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
    <div className="dark:bg-[#252525] transition duration-1000 ease-in-out max-w-[1440px] mx-auto">

      <div
        className={`${
          animateNav
            ? "transition-all md:animate-fadeIn backdrop-blur-[3px] shadow-sm bg-white/90"
            : "bg-transparent"
        } fixed left-0 top-0 right-0 flex justify-between items-center p-3 w-full z-50 max-w-[1440px] mx-auto dark:bg-[#252525]/50 dark:text-white transition duration-1000 ease-in-out`}
      >
        <div className="logo animate-fadeIn transition-all sm:pl-10">
          <h1 className= {`${animateNav? "text-[hsl(240,4%,20%)] dark:text-teal-400":"text-white"} text-2xl sm:text-4xl font-extrabold  font-marck`}>
            SadaNand
          </h1>
        </div>
        <ul
          className={`${
            burgerOpen
              ? "fixed inset-0 bg-[#181616f1] scale-100   backdrop-blur-[4px] text-white   z-20 "
              : "invisible opacity-0 fixed inset-0 scale-0  sm:space-y-0  sm:visible sm:opacity-100 sm:scale-100 sm:static sm:flex sm:flex-row sm:text-black font-lighter  sm:gap-x-1 lg:gap-x-6 sm:justify-end lg:justify-between ml-auto lg:mr-8"
          } transition-all duration-300 ease-linear [&>*]:py-1 h-screen sm:h-auto flex flex-col space-y-4 justify-center items-center ${animateNav? " dark:[&>*]:text-white":"[&>*]:text-white/90 [&>*:hover]:text-white"}`}
        >
          <NavLinks closeBurgerOnLink={closeBurgerOnLink}/>
          
        </ul>
        <ResumeButton text={"RESUME"}/>

          <button className= {`${animateNav? "text-black dark:text-teal-400":"dark:text-teal-400 text-white"} px-2 py-2 sm:ml-4 ml-0 mr-6 sm:mr-0 text-xl rounded-full`} onClick={toggleTheme} >{toggle?<MdOutlineLightMode/>: <MdDarkMode/>}</button>
       
       
        {/* <div className={`${toggle? "bg-[#343434]":"bg-transparent"} cursor-pointer h-[40px] border border-gray-500  w-[70px] p-1 
                          rounded-full flex sm:ml-4 ml-0 mr-6 sm:mr-0 transition duration-500 shadow-sm" `} onClick={toggleTheme}>
          <div className= {`${toggle? "translate-x-[30px] rotate-180 bg-teal-500":"bg-teal-400"}  
                        h-full rounded-full w-1/2 flex justify-center items-center transition duration-1000 text-white font-semibold`}>
          {toggle?<MdOutlineLightMode/>: <MdDarkMode/>}
          </div>
        </div> */}



{/* Hamburger menu ------------------------> */}


        <div className="sm:hidden z-40 absolute right-2 top-4 dark:text-white">
         
        <button ref={burgerState} className="button-one" aria-controls="primary-navigation" aria-expanded="false" onClick={hamburgerHandler}> 
    <svg fill={`${animateNav? "var(--button-color-dark)":"var(--button-color)"}`} className="hamburger" viewBox="0 0 100 100" width="30">
      <rect className="line top" width="80" height="10" x="10" y="25" rx="5">
      </rect>
      <rect className="line middle" width="80" height="10" x="10" y="45" rx="5">
      </rect>
      <rect className="line bottom" width="80" height="10" x="10" y="65" rx="5">
      </rect>
    </svg>
  </button>
        </div>
      </div>


{/* Hero section-------------------> */}
        <div className=" mx-auto flex flex-col h-full">

        
        <Hero/>
        <ScrollHere/>
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
      </div>
    </>
  );
};

export default Home;
