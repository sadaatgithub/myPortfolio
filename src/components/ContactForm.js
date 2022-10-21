import {FaGithub,FaLinkedin} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import { useRef,useState } from 'react'
import emailjs from "emailjs-com"
import {ImSpinner8} from "react-icons/im"
const ContactForm = () => {

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
console.log('Send')
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,process.env.REACT_APP_USER_ID
    ).then(
      response => response.status === 200?  
      setMessage({
        ...message,
        isLoading:false,
        isSuccess:true,
      }):null
      ,
      error =>console.log(error.text)
      
      )
      e.target.reset()
    
  }

  return (
    <>
    <div className="w-full sm:w-2/3 flex items-center justify-center bg-white dark:bg-[#323232] rounded-xl py-20 shadow-md relative mb-8">
        <form ref={form} onSubmit={sendEmail} className="w-[90%] max-w-lg flex flex-col gap-y-4">
            <div className="">
            <label formHTML="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input type="text" name="user_name" className="block w-full border border-gray-300 p-2 rounded dark:bg-[#505050]
            dark:border-gray-500 focus:border-red-300 mt-1"/>
             </div>
            <div className="">

            <label formHTML="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>

             <input type="text" name="user_email" className="border border-gray-300 w-full p-2 rounded focus:border-indigo-500 mt-1 dark:bg-[#505050]
            dark:border-gray-500"/>
        </div>
        <div className="">
            <label formHTML="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea name="message" id="" rows="5" className="block border border-gray-300 w-full
             focus:border-red-300 mt-1 dark:bg-[#505050]
             dark:border-gray-500"></textarea>

        </div>
        <div className="">
            <button type="submit" className="p-4 mt-2 bg-teal-400 w-full text-white rounded flex justify-center items-center"> {message.isLoading? <ImSpinner8 className="animate-spin text-2xl"/>:message.isSuccess?"Meessage Sent":"Send Message"}</button>
        </div>
        </form>

<div className="w-full absolute -bottom-5 left-0 flex justify-evenly">

{/* <h3 className="text-3xl">SOCIAL</h3> */}
 <div className="flex w-full justify-center sm:justify-between sm:w-1/3 gap-x-2 [&>*]:text-[#343434] [&>*:hover]:bg-[#343434] [&>*:hover]:text-white [&>*:hover]:transition [&>*:hover]:duration-500 [&>*]:duration-500">
  <a href="https://github.com/sadaatgithub" className="flex gap-4 items-center bg-white p-2 rounded-full border shadow-md"><FaGithub className="text-2xl"/></a>
  <a href="mailto:sadachaudhari@gmail.com" className="flex gap-4 items-center bg-white p-2 rounded-full border shadow-md "><AiOutlineMail className="text-2xl"/></a>
  <a href="tel:7972496340" className="flex gap-4 items-center bg-white p-2 rounded-full border shadow-md "><IoMdCall className="text-2xl"/></a>
  <a href="https://www.linkedin.com/in/sadanand-choudhari-0a1682177/" target="_blank" 
              className="flex gap-4 items-center bg-white p-2 rounded-full border shadow-md " ><FaLinkedin className="text-2xl"/></a></div>
  </div>

        </div>
    </>
  )
}

export default ContactForm