import React from 'react'
import { useInView } from 'react-intersection-observer'
import { IoMdCall } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";


const Summary = () => {

        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.1,
        })
  return (
    <>
 <div ref={ref} className= {` flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 px-8 sm:px-20 lg:px-10  w-full lg:w-1/2`}>
            <h3 className={`${inView? "animate-slideInBottom":"opacity-0"} text-xl md:text-2xl font-bold md:self-start self-center  text-slate-600 dark:text-gray-400`}>
              GET TO KNOW ME
            </h3>
            <p  className={`${inView? "animate-slideInBottom anim-delay-300":"opacity-0"} text-base font-normal text-slate-700 md:text-[18px] leading-7 dark:text-gray-300 [&>span]:font-medium [&>strong]:dark:text-slate-400 text-justify`}>
              I am a front-end web developer who specializes in using JavaScript
              to optimize web applications. I have worked extensively with <span>React JS</span> <span>Next JS</span>
              , <span>Tailwind CSS</span>, <span>HTML</span>, <span>CSS</span> and <span>JavaScript</span>. I am also familiar
              with <span>Django</span> and <span>Django REST Framework</span>. I am a hard worker who is
              always looking to learn new skills and improve my work.
              <br />
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then just say <b>Hello</b>.
            </p>
            <div className={`${inView? "animate-slideInBottom":"opacity-0"} flex w-full flex-col sm:flex-row justify-between [&>*]:flex-grow [&>*]:p-2 [&>*]:flex-row [&>div>p]:text-slate-500 [&>div>h6]:text-slate-800 border-t `}>
              <div className="flex items-center gap-4">
                <button className="dark:text-gray-200 text-xl text-slate-600"><IoMdCall/></button>
                <p>7972496340</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="dark:text-gray-200 text-xl text-slate-600"><AiFillMail/></button>
                <p>sadachaudhari@gmail.com</p>
              </div>
              {/* <div className="flex">
                <h6>Linkedin</h6>
              </div> */}
            </div>
          </div>
    </>
  )
}

export default Summary