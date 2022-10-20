
import ContactForm from "./ContactForm"


const Contact = () => {
  return (
    <>
    <div name="contact" className="flex flex-col justify-center items-center mt-48  min-h-[100vh] bg-[#f3f3f3]">
        <h2 className="text-center mt-16 text-2xl sm:text-4xl font-semibold  text-slate-700  p-2  
            tracking-wider  border-b-4 border-teal-400">CONTACT</h2>

            {/* <h3 class="text-xl mt-8 text-teal-500 font-bold">GET IN TOUCH</h3> */}
            <div className="flex flex-col p-1 items-center justify-center gap-y-4 sm:gap-x-4  w-full sm:p-4 mt-14 h-full">
            <ContactForm/>

      
            </div>
        </div></>
  )
}

export default Contact