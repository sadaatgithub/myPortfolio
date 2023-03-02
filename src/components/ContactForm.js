import {FaGithub,FaLinkedin} from "react-icons/fa"
import {AiFillMail} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import { useRef,useState } from 'react'
import emailjs from "emailjs-com"
import {ImSpinner8} from "react-icons/im"
import { useInView } from "react-intersection-observer"


const ContactForm = () => {

  const socialLinks = [
    {href:"https://github.com/sadaatgithub",icon:<FaGithub/>},
    {href:"https://www.linkedin.com/in/sadanand-choudhari-0a1682177/",icon:<FaLinkedin/>},
    {href:"mailto:sadachaudhari@gmail.com",icon:<AiFillMail/>},
    {href:"tel:7972496340",icon:<IoMdCall/>},

  ]

  const { ref:formRef, inView } = useInView({
    triggerOnce: true,
    threshold:0.3,
   
  });

  const [message,setMessage] = useState({
    isLoading:null,
    isSuccess:false
  })

const form = useRef()

  const sendEmail =(e) =>{
    e.preventDefault()
    setMessage({
      ...message,
      isLoading:true,
    })
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,process.env.REACT_APP_USER_ID
    ).then(response => 
      response.status === 200?  
      setMessage({
        ...message,
        isLoading:false,
        isSuccess:true,
      }):null, error =>console.log(error.text)
      
      ).then(()=>{
        setTimeout(() => {
          setMessage({
            ...message,
            isLoading:false,
            isSuccess:false,
          })
        }, 3000);
       
      })
      e.target.reset()
    
  }

  return (
    <>
    <div ref={formRef} className={`${inView? "animate-slideInBottom transition-all":"opacity-0"} w-full sm:w-2/3 flex items-center justify-center bg-white dark:bg-[#323232] rounded-xl py-20 shadow-md relative mb-8 transition duration-1000 ease-in-out `}>
        <form ref={form} onSubmit={sendEmail} className="w-[90%] max-w-lg flex flex-col gap-y-4">
            <div className="">
            <label forhtml="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition duration-1000 ease-in-out">Name</label>
            <input type="text" required name="user_name" className="block w-full border p-2 rounded dark:bg-[#505050] transition duration-1000 ease-in-out
            dark:border-gray-500 focus:border-indigo-500 mt-1 outline-none"/>
             </div>
            <div className="">

            <label forhtml="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition duration-1000 ease-in-out">Email</label>

             <input type="text" required name="user_email" className="border outline-none border-gray-300 w-full p-2 rounded focus:border-indigo-500 mt-1 dark:bg-[#505050]
             transition duration-1000 ease-in-out
            dark:border-gray-500"/>
        </div>
        <div className="">
            <label forhtml="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition duration-1000 ease-in-out">Message</label>
            <textarea name="message" id="" rows="5" className="block border border-gray-300 w-full outline-none
             focus:border-indigo-500 mt-1 dark:bg-[#505050] rounded transition duration-1000 ease-in-out
             dark:border-gray-500"></textarea>
        </div>
        <div className="">
            <button type="submit" className="p-4 mt-2 bg-teal-400 w-full text-white rounded flex justify-center items-center"> {message.isLoading? <ImSpinner8 className="animate-spin text-2xl"/>
                          :message.isSuccess?"Meessage Sent":"Send Message"}</button>
        </div>
        </form>

<div className="w-full absolute -bottom-5 left-0 flex justify-evenly">

 <div className="flex w-full justify-center sm:justify-between sm:w-1/3 gap-x-2 [&>*]:text-[#343434] [&>*:hover]:bg-[#343434] [&>*:hover]:text-white [&>*:hover]:transition [&>*:hover]:duration-500 [&>*]:duration-500">
  
               {socialLinks.map((link) =>{
                return <a key={link.href} href={link.href} className="flex gap-4 items-center bg-white dark:bg-[#343434] dark:text-teal-400 p-2 rounded-full border shadow-md [&>*]:text-2xl transition duration-1000 ease-in-out">{link.icon}</a>
               })}
              </div>
              </div>

        </div>
    </>
  )
}

export default ContactForm