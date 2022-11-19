import React from 'react'
import resume from "../../assets/resume/srcfrontend.pdf"

const ResumeButton = ({text}) => {
  return (
    <a href={resume} download
              className={`${text==="RESUME"? "hidden md:block":"mt-8"} px-3 py-2 bg-teal-400
              text-white  tracking-wide rounded hover:bg-teal-500 animate-fadeIn transition-all anim-delay-500
               `} value="RESUME" type="button"
            >{text}</a>
  )
}

export default ResumeButton