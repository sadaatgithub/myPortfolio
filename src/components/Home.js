import { GiHamburgerMenu } from "react-icons/gi";
import {MdDarkMode,MdOutlineLightMode} from "react-icons/md"
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import ScrollHere from "./ScrollHere";
import Footer from "./Footer";
import Hero from "./Hero";
import ResumeButton from "./buttons/ResumeButton";
import NavLinks from "./navbar/NavLinks";


const Home = ({toggleTheme,toggle}) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burgerHandler = () => {
    setBurgerOpen(!burgerOpen);
  };
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
              ? "flex fixed top-0 left-0 bottom-0 right-0 bg-[#181616cb] h-[100vh]  backdrop-blur-[4px] text-white  flex-col space-y-4 justify-center items-center z-20 animate-drawerDown transition-all"
              : "hidden sm:flex sm:flex-row sm:text-black font-lighter sm:relative sm:gap-x-1 lg:gap-x-6 justify-between ml-auto mr-8"
          } [&>*]:py-1 ${animateNav? "sm:[&>*]:text-black dark:[&>*]:text-white":"[&>*]:text-white/90 [&>*:hover]:text-white"}`}
        >
          <NavLinks burgerMenu={setBurgerOpen}/>
          
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


        <div className="sm:hidden z-40 absolute right-2 dark:text-white">
          {burgerOpen ? (
            <FaTimes onClick={burgerHandler} color={"white"} size={25} />
          ) : (
            <GiHamburgerMenu onClick={burgerHandler} size={20} className={`${animateNav? "text-black dark:text-white":"text-white"}`} />
          )}
        </div>
      </div>
        <div className=" mx-auto flex flex-col h-full">

{/* Hero section-------------------> */}
        
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
