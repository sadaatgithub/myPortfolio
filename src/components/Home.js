import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import ScrollHere from "./ScrollHere";
import Footer from "./Footer";
import resume from "../assets/resume/srcfrontend.pdf"

const Home = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const burgerHandler = () => {
    setBurgerOpen(!burgerOpen);
    console.log(burgerOpen);
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

      <div
        className={`${
          animateNav
            ? "transition-all animate-fadeIn backdrop-blur-[3px] shadow-sm bg-white/90"
            : " bg-transparent"
        } fixed left-0 top-0 flex justify-between items-center p-3 w-full z-50`}
      >
        <div className="logo animate-fadeIn transition-all sm:pl-10">
          <h1 className= {`${animateNav? "text-[hsl(240,4%,20%)]":"text-white"} text-2xl sm:text-4xl font-extrabold  font-marck`}>
            SadaNand
          </h1>
        </div>
        <ul
          className={`${
            burgerOpen
              ? "flex fixed top-0 left-0 bottom-0 right-0 bg-[#181616cb] h-[100vh]  backdrop-blur-[4px] text-white  flex-col space-y-4 justify-center items-center z-20 animate-drawerDown transition-all"
              : "hidden sm:flex sm:flex-row sm:text-black font-lighter sm:relative gap-x-6 justify-between ml-auto mr-8"
          } [&>*]:py-1 ${animateNav? "sm:[&>*]:text-black [&>*]:text-white":"[&>*]:text-white/90 [&>*:hover]:text-white"}`}
        >
          <Link
            activeClass="btn-active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="mx-2 sm:text-gray-900 cursor-pointer  border-b-4 border-transparent hover:border-b-4 font-semibold
             hover:border-teal-400
                   sm:hover:text-black animate-fadeIn transition-all anim-delay-100 tracking-widest"
          >
            ABOUT
          </Link>

          <Link
            activeClass="btn-active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mx-2 sm:text-gray-900 cursor-pointer border-b-4 border-transparent hover:border-b-4 font-semibold
             hover:border-teal-400  animate-fadeIn 
                     transition-all anim-delay-200 tracking-widest"
          >
            SKILLS
          </Link>

          <Link
            activeClass="btn-active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mx-2 sm:text-gray-900 cursor-pointer border-b-4 border-transparent   hover:border-b-4 font-semibold
                       hover:border-teal-400  animate-fadeIn transition-all anim-delay-300 tracking-widest"
          >
            PROJECTS
          </Link>

          <Link
            activeClass="btn-active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mx-2 sm:text-gray-900 cursor-pointer border-b-4 border-transparent hover:border-b-4 font-semibold
                       hover:border-teal-400  animate-fadeIn  transition-all anim-delay-400 tracking-widest"
          >
            CONTACT
          </Link>
        </ul>
        <input
              className="hidden sm:block px-3 py-2 bg-teal-400
             text-white  tracking-wide rounded
             hover:bg-teal-500 animate-fadeIn transition-all anim-delay-500
              " value="Resume" type="button"
            />
        <div className="sm:hidden z-40 absolute right-2">
          {burgerOpen ? (
            <FaTimes onClick={burgerHandler} color={"white"} size={25} />
          ) : (
            <GiHamburgerMenu onClick={burgerHandler} size={20} color={animateNav? "black":"white"} />
          )}
        </div>
      </div>
        {/* Hero section */}
        <div className=" mx-auto flex flex-col h-full">

        <main
          name="about"
          className="hero-banner relative flex justify-center items-center w-full bg-white text-gray-800 h-[100vh] bg-hero-pattern2 bg-cover bg-center overflow-hidden]"
        >
          <div
            className="flex p-6 flex-col justify-center items-center gap-4 text-center z-10
              flex-grow-1  border-1"
          >
            <div className="mt-14 text-3xl sm:text-6xl font-poppins font-semibold text-white animate-slideInRight transition-all anim-delay-500 sm:mt-6">
              <h1 className="uppercase">
                <span className=" ">Hi <span className="text-teal-400">,</span> I'am <span className="text-teal-400">,</span> </span>
                <span className="">Sadanand</span>
              </h1>
            </div>
            <h5 className="text-blue-400 uppercase text-xl mt-4 sm:text-2xl font-bold tracking-widest animate-slideInRight transition-all anim-delay-800">
              Frontend Web Developer
            </h5>
            <p className="text-sm leading-loose w-auto text-center sm:w-2/4 sm:text-base mt-2 text-white/80 animate-slideInRight transition-all anim-delay-900 ">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
            <a href={resume} download
              className="py-3 flex justify-center items-center gap-4 px-8 bg-gradient-to-t from-teal-600  to-teal-400
              mt-4 text-base text-white rounded tracking-wider font-semibold 
               hover:shadow-sm animate-slideInRight transition-all anim-delay-1000 cursor-pointer 
              ">GET RESUME
             </a>
          </div>
          {/* <div className="flex justify-center items-center  animate-slideInRight transition-all anim-delay-1000 p-2">
            <img src={webdev} alt="" /
          </div> */}
        </main>
          <ScrollHere/>
        <About />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  );
};

export default Home;
