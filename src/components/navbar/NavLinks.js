import React from 'react'
import { Link } from "react-scroll";



const NavLinks = ({burgerMenu}) => {
const navLinks = ["home","about","projects","contact"]

const closeSubmenu = () =>{
  burgerMenu()
}

  return (
    <>
    {navLinks.map((link,index) =>{

    const animDelay = "anim-delay-" + 100 * index

        return (
        <Link key={index}
            activeClass="btn-active"
            to={link}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeSubmenu}
            className={`uppercase mx-2 sm:text-gray-700 cursor-pointer   font-medium
             sm:hover:text-black animate-fadeIn transition-all ${animDelay} tracking-widest nav-link hover:before:w-full`}
        >{link}</Link>)
    })}
    </>
    // border-b-4 border-transparent hover:border-b-4 hover:border-teal-400
  )
}

export default NavLinks