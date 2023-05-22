import React from 'react'
import resume from "../../assets/resume/Sadanand_choudhari_react_next_resume.pdf"

const ResumeButton = ({text}) => {
  return (
    <a href={resume} download
              className={`${text==="RESUME"? "hidden md:block animate-fadeIn anim-delay-500 ml-2":"mt-8 animate-slideInBottom anim-delay-1000"} px-3 py-2 bg-teal-400
              text-white  tracking-wide rounded hover:bg-teal-500  transition-all 
               `} value="RESUME" type="button"
            >{text}</a>
  )
}

export default ResumeButton